import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/core/models/city.model';
import { CityService } from 'src/app/core/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.sass']
})
export class CityComponent implements OnInit {

  cities:City[];
  newCity: City = City.Init();


  constructor(
    private cityService:CityService) { }

  ngOnInit(): void {
    this.cityService.getAll().subscribe(
      res => {
        this.cities = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}
