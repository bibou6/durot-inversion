import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { City } from '../../models/city.model';
import { TranslateService } from '@ngx-translate/core';
import { CityService } from '../../services/city.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.sass']
})
export class AddCityComponent implements OnInit {

  isLinear = false;
  mainImageForm: FormGroup;
  secondFormGroup: FormGroup;
  

  newCity: City = City.Init();

  mainImage:string;

  files: File[] = [];

  multiFormLabel: string;
  singleFormLabel: string;

  hasId:boolean = false;
  

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCityComponent>,
    private translate:TranslateService,
    private cityService:CityService) { }

  ngOnInit(): void {
    

	
    this.mainImageForm = this.formBuilder.group({"image" : this.mainImage});
    this.translate.get('city.inputs.pictures.add').subscribe(
      res => this.multiFormLabel = res
    )
    this.translate.get('city.inputs.mainImage.add').subscribe(
      res => this.singleFormLabel = res
    )
  }


  createCity(event){
	  this.newCity = event;
	  this.newCity = this.removeEmptyStringsFrom(this.newCity);
	  this.cityService.createCity(this.newCity).subscribe(
		  res => {
			  this.newCity = res;
		  }
	  )

  }

  updateCity(event){
    this.newCity = event;
    this.newCity = this.removeEmptyStringsFrom(this.newCity);
    this.cityService.updateCity(this.newCity).subscribe(
      res => {
        this.newCity = res;
      }
    )
  }

  onNoClick(){
    if(this.newCity)
      this.dialogRef.close(this.newCity.id);
    else
      this.dialogRef.close(null);
  }

  addMainImage(event){
    if(event != null){
      if(event != ""){
        this.newCity.base64MainImage = event; 
        this.cityService.updateCity(this.newCity).subscribe(
          res => this.newCity = res
        )
      }else{
        this.cityService.deleteMainImage(this.newCity.id).subscribe(
          () => this.newCity.base64MainImage = null
        )
      }
    }
  }
 
  addMultiplePicture(event){
    this.cityService.addImage(this.newCity.id,event).subscribe(
      () => console.log("image added")
    )
  }

  close(){
    console.log("closing");
    this.dialogRef.close(this.newCity);
  }
  
  removeEmptyStringsFrom(obj) {
    const clone = { ...obj };
    Object.entries(clone).forEach(([key, val]) => (val === '' || val == null) && delete clone[key]);
    return clone;
  }

  previous(stepper:MatStepper){
	  console.log(stepper);
	  stepper.previous();
  }

  next(stepper:MatStepper){
	  stepper.next();
  }

}
