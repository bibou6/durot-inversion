import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../models/city.model';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.sass']
})
export class CityComponent implements OnInit {

  cities:City[];
  newCity: City = City.Init();
  data:any;


  constructor(
    private cityService:CityService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
    if( this.data != null && this.data.cities != null){
      this.cities = this.data.cities;
    }
  }

}
