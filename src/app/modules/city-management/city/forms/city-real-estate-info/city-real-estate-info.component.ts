import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { City, RentalRequestValue } from '../../../models/city.model';

@Component({
  selector: 'app-city-real-estate-info',
  templateUrl: './city-real-estate-info.component.html',
  styleUrls: ['./city-real-estate-info.component.sass']
})
export class CityRealEstateInfoComponent implements OnInit {

	@Input()
	city: City;

	rentalRequestValue = RentalRequestValue;

	@Input()
	showPrevious: boolean = false;

	@Output()
	onPrevious: EventEmitter<boolean> = new EventEmitter();

	@Output()
	submitForm: EventEmitter<City> = new EventEmitter();

	rentalInformationForm: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		console.log(this.rentalRequestValue)
		this.rentalInformationForm = this.formBuilder.group(this.city);
	}

	previous(){
		console.log("prev");
		this.onPrevious.emit(true);
	}

	onSubmit(data){
		console.log(data);
		this.city.buyingPriceBySquareMeters = data.buyingPriceBySquareMeters;
		this.city.rentPriceShortBySquareMeters = data.rentPriceShortBySquareMeters;
		this.city.rentPriceWithFournitureLongBySquareMeters = data.rentPriceWithFournitureLongBySquareMeters;
		this.city.rentPriceWoFournitureLongBySquareMeters = data.rentPriceWoFournitureLongBySquareMeters;
	    this.city.rentalRequestLong = data.rentalRequestLong;
		this.submitForm.emit(this.city);
	}

}
