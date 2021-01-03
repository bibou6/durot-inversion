import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentConfig, ENV_CONFIG } from 'src/app/environment-config.interface';
import { Test } from '../models/test.model';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private httpClient: HttpClient,
    @Inject(ENV_CONFIG) private config: EnvironmentConfig
  ) { }

  test(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(this.config.environment.api.baseUrl+'/template');
  }

  testWithId(id:number): Observable<any> {
    return this.httpClient.get<any>(this.config.environment.api.baseUrl+'/template/'+id);
  }

  createtest(test:Test): Observable<any> {
    return this.httpClient.post<any>(this.config.environment.api.baseUrl+'/template',test);
  }


}
