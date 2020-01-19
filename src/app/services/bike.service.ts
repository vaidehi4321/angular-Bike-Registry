import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
const httpOptions = {
  headers :new HttpHeaders({'content-type':'application/json'})
};

@Injectable()
export class BikeService {
  valid: any;
 
  constructor(private http:HttpClient) { }
  getBikes(){
    return this.http.get('server/api/v1/bikes');
  }
  getBike(id: number){
    return this.http.get('/server/api/v1/bikes/'+id);
  }
  createBikeRegistration(bike){
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes',body,httpOptions);
  }
}
