import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  RouterState,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { City } from '../models/city.model';
import { CityService } from '../services/city.service';

@Injectable({
  providedIn: 'root'
})
export class GetCityResolver implements Resolve<City> {

  constructor(
    private cityService: CityService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<City> {
    let cityId = route.params.id;
    return this.cityService.getCityById(cityId);
  }
}
