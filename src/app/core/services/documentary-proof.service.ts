import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentConfig, ENV_CONFIG } from 'src/app/environment-config.interface';
import { DocumentaryProof } from '../models/documentaryProof';

@Injectable({
  providedIn: 'root'
})
export class DocumentaryProofService {

  private basePath: string = '/documentaryProof'
  private baseUrl: string;

  constructor(
    private httpClient: HttpClient,
    @Inject(ENV_CONFIG) private config: EnvironmentConfig
  ) { 
    this.baseUrl = this.config.environment.api.baseUrl + this.basePath;
  }

  list(): Observable<DocumentaryProof[]> {
    return this.httpClient.get<DocumentaryProof[]>(this.baseUrl);
  }

  getById(id:number): Observable<any> {
    return this.httpClient.get<DocumentaryProof>(this.baseUrl+'/'+id);
  }

  create(test:DocumentaryProof): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl,test);
  }

}
