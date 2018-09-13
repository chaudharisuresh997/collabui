import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class TeamsdataService{

  constructor(public http:Http) {
    this.http=http;
   }

public postToBackEnd()
{
console.log("I GOT HIT");
  
      let cpHeaders = new Headers({ 'Content-Type': 'application/json'});
       
      let options = new RequestOptions({ headers: cpHeaders });
      return this.http.post('http://localhost:8081/empCreate',{
        "Name": "RAMAN SINGH THAKUR"} , options)
             .map(success => success.status)
             .catch(this.handleError);
}
private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
    }
}
