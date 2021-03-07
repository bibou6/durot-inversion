import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { City } from '../../../models/city.model';

@Component({
  selector: 'app-city-basic-info',
  templateUrl: './city-basic-info.component.html',
  styleUrls: ['./city-basic-info.component.sass']
})
export class CityBasicInfoComponent implements OnInit {

	@Input()
	city: City;

	@Input()
	showPrevious: boolean = false;

	@Output()
	submitForm: EventEmitter<City> = new EventEmitter();

	informationForm: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.informationForm = this.formBuilder.group(this.city);
	}

	onSubmit(data){
		this.city.region = data.region;
    	this.city.department = data.department;
		this.city.population = data.population;
    	this.city.description = data.description;
		this.submitForm.emit(this.city);
	}
}
