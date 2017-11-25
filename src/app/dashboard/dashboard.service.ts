import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//Create the service
@Injectable()
export class DashboardService {

 private coordinatesEmailUrl = localStorage.getItem('API_URL') + "/api/coords/email";
 private storesEmailUrl = localStorage.getItem('API_URL') + "/api/stores/email";
 private storeCoordinates24Url = localStorage.getItem('API_URL') + "/api/coords/24";
 constructor(
   private http: Http
 ) {  }

 // don't know if we need this anymore
 getCoordinates(email): Observable<Object> {
   let body = {email: email};
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   return this.http.post(this.coordinatesEmailUrl, body, options).map(this.extractData).catch(this.handleError);
 }

 getStores(email): Observable<Object> {
   let body = {email: email};
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   return this.http.post(this.storesEmailUrl, body, options).map(this.extractData).catch(this.handleError);
 }

 getStoreCoordinates24Hours(id): Observable<Object> {
   let body = {storeId: id};
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   return this.http.post(this.storeCoordinates24Url, body, options).map(this.extractData).catch(this.handleError);
 }

 //Extract the home data from the JSON Response
 private extractData(res: Response) {
   let JSONresponse = res.json();
   return JSONresponse || {};
 }

 //Handle the error and return the error object
 private handleError(res: Response) {
   let JSONresponse = res.json();
   return Observable.throw(JSONresponse);
 }
}
