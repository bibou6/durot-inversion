import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.sass']
})
export class AddCityComponent implements OnInit {

  addCityForm;

  newCity: City = City.Init();

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCityComponent>) { }

  ngOnInit(): void {
    this.addCityForm = this.formBuilder.group(this.newCity);
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(data){
    this.dialogRef.close("Pizza !");
  }

}
