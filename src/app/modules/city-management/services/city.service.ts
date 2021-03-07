import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvironmentConfig, ENV_CONFIG } from 'src/app/environment-config.interface';
import { City } from '../models/city.model';
import { InformationMap } from '../models/informationMap.model';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private httpClient: HttpClient,
    @Inject(ENV_CONFIG) private config: EnvironmentConfig
  ) { }

  getAll(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.config.environment.api.baseUrl+'/city');
  }

  getCityById(id:number): Observable<City> {
    return this.httpClient.get<City>(this.config.environment.api.baseUrl+'/city/'+id);
  }

  createCity(city:City): Observable<City> {
    return this.httpClient.post<City>(this.config.environment.api.baseUrl+'/city',city);
  }

  updateCity(city:City): Observable<City> {
    return this.httpClient.put<City>(this.config.environment.api.baseUrl+'/city/'+city.id,city);
  }

  deleteCity(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.config.environment.api.baseUrl + '/city/'+id);
  }

  deleteMainImage(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.config.environment.api.baseUrl + '/city/'+id+'/image');
  }

  addImage(cityId:number, image:string): Observable<any>{
    let body = new URLSearchParams();
    body.set("base64Image",image)
    return this.httpClient.post<any>(this.config.environment.api.baseUrl+'/city/'+cityId+'/media',body.toString(),{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  deleteImage(idCity:number,idImage:number): Observable<any>{
    return this.httpClient.delete<any>(this.config.environment.api.baseUrl+'/city/'+idCity+'/media/'+idImage);
  }

  addInformationMap(id:number, informationMap:InformationMap): Observable<any>{
    return this.httpClient.post<any>(this.config.environment.api.baseUrl+'/city/'+id+'/informationMap',informationMap);
  }

  deleteInformationMap(id:number,idMap:number){
    return this.httpClient.delete<any>(this.config.environment.api.baseUrl+'/city/'+id+'/informationMap/'+idMap);
  }


}
