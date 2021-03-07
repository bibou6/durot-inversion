import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { City } from '../../../models/city.model';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.sass']
})
export class CityInfoComponent implements OnInit {

	@Input()
	city: City;

	@Output()
	submitForm: EventEmitter<City> = new EventEmitter();

	addCityForm: FormGroup;

	nameFormControl = new FormControl('', [
		Validators.required,
	 ]);
	  
	
	
	constructor(
		private formBuilder: FormBuilder) { }

	ngOnInit(): void {
	this.addCityForm = this.formBuilder.group(this.city,{
		Validators: [this.nameFormControl]
	  });
	}


	onSubmit(data){
		if(data != null && data.name != null){
		  this.city = data;
		  this.submitForm.emit(this.city);
		}
	}

}
