import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import {  Inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnvironmentConfig, ENV_CONFIG } from 'src/app/environment-config.interface';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
  constructor(
    private httpClient: HttpClient,
    @Inject(ENV_CONFIG) private config: EnvironmentConfig,
    private jwtHelper: JwtHelperService,
    private router:Router,
  ) { 
  }


  login(username: string, password: string): Observable<any> {
    let params = new HttpParams()
    .set("username",username)
    .set("password",password);

    return this.httpClient.post(this.config.environment.api.baseUrl+'/login', params.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });       
  }

  isAuthenticated(){
    return !this.jwtHelper.isTokenExpired(this.jwtHelper.tokenGetter());
  }

}
