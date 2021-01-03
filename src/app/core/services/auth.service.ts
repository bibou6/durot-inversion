import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import {  Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvironmentConfig, ENV_CONFIG } from 'src/app/environment-config.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    @Inject(ENV_CONFIG) private config: EnvironmentConfig
  ) { }


  login(username: string, password: string): void {
    console.log("test");
    let params = new HttpParams()
    .set("username",username)
    .set("password",password);
    console.log(params.toString());

    this.httpClient.post(this.config.environment.api.baseUrl+'/login', params.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(
      response => {
        console.log(response["access_token"]);
        localStorage.setItem('jwt', JSON.stringify(response["access_token"]));
      }
    );
         
 }

}
