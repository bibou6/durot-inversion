import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { City } from '../models/city.model';
import { CityService } from '../services/city.service';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesResolver implements Resolve<City[]> {

  constructor(private cityService:CityService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<City[]> | Promise<City[]> {
    return this.cityService.getAll();
  }
}
