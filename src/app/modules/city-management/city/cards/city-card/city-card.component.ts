import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { City } from '../../../models/city.model';
import { CityService } from '../../../services/city.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.sass']
})
export class CityCardComponent implements OnInit {

  @Input()
  city:City;

  @Input()
  index: number;

  @Output()
  deleted:any = new EventEmitter<number>();

  constructor(
    private cityService:CityService,
    private notifier:NotifierService,
    private router:Router) { }

  ngOnInit(): void {
  }

  deleteCity(cityId:number,index:number){
    this.deleted.emit(index);
    this.cityService.deleteCity(cityId).subscribe(
      () => {
        this.notifier.notify('city.flash.success.deleted');
      }
    )
  }

  viewCity(cityId:number){
    console.log(cityId);
    this.router.navigate([ '/city/view', cityId ] );
  }
}
