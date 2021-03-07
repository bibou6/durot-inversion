import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { City } from '../../models/city.model';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.sass']
})
export class CityViewComponent implements OnInit {

  city: City;
  
  editBasicInfo: boolean = false;
  editRealEstateInfo: boolean = false;

  constructor(
    private notifier: NotifierService,
    private service: CityService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.data.city;
    this.formatTitle();
    console.log(this.city);
  }

  formatTitle(){
    this.city.name = this.city.name.normalize('NFKD').replace(/[^\w ]/g, '')
  }

  addInformationMap(event){
	  this.city.informationMap.push(event);
	  this.service.addInformationMap(this.city.id,event).subscribe(
		  res => {
			  this.refresh();
			  this.notifier.notify('city.inputs.information.flash.success.added');
		  }
	  )
  }

  removeInformation(id: number,index: number) {
	  this.city.informationMap.splice(index,1);
	  this.service.deleteInformationMap(this.city.id,id).subscribe(
		res => {
			this.notifier.notify('city.inputs.information.flash.success.removed');
		}
	  )
  }

	refresh(){
		this.service.getCityById(this.city.id).subscribe(
			res => {
				this.city = res
			}
		)
	}


	updateCity(event){
		console.log(event);
		this.city = event;
		this.editBasicInfo = false;
		this.editRealEstateInfo = false
		this.service.updateCity(this.city).subscribe(
			res => {
				this.city = res;
			}
		)
		
	}

	addMultiplePicture(event){
		this.service.addImage(this.city.id,event).subscribe(
		  () => {
			  console.log("refreshing");
			  this.refresh();
		  }
		)
	 }

	deleteImage(index){
		console.log(index);
		let id = this.city.images[index].id;
		this.city.images.splice(index,1);
		this.service.deleteImage(this.city.id,id).subscribe(
			res => {
				this.notifier.notify('city.inputs.pictures.flash.success.removed');
			}
		)
	}
}
