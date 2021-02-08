import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { City } from '../../models/city.model';
import { TranslateService } from '@ngx-translate/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.sass']
})
export class AddCityComponent implements OnInit {

  addCityForm: FormGroup;
  isLinear = false;
  mainImageForm: FormGroup;
  secondFormGroup: FormGroup;
  
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  newCity: City = City.Init();

  mainImage:string;

  files: File[] = [];

  multiFormLabel: string;
  singleFormLabel: string;

  

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCityComponent>,
    private translate:TranslateService,
    private cityService:CityService) { }

  ngOnInit(): void {
    this.addCityForm = this.formBuilder.group(this.newCity,{
      Validators: this.nameFormControl
    });
    this.mainImageForm = this.formBuilder.group({"image" : this.mainImage});
    this.translate.get('city.inputs.pictures.add').subscribe(
      res => this.multiFormLabel = res
    )
    this.translate.get('city.inputs.mainImage.add').subscribe(
      res => this.multiFormLabel = res
    )
  }


  onSubmitCity(data){
    if(data != null && data.name != null){
      this.newCity = data;
      console.log(this.newCity);
      this.newCity = this.removeEmptyStringsFrom(this.newCity);
      console.log(this.newCity);
      this.cityService.createCity(this.newCity).subscribe(
        res => {
          console.log(res);
          this.newCity = res;
        }
      )
    }
  }

  onNoClick(){
    this.dialogRef.close();
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
    this.dialogRef.close(this.newCity);
  }
  
  removeEmptyStringsFrom(obj) {
    const clone = { ...obj };
    Object.entries(clone).forEach(([key, val]) => (val === '' || val == null) && delete clone[key]);
    return clone;
  }

}
