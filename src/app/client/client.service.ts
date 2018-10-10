import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  '@angular/common/http';
import { Client } from '../shared/models/client.model'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http:HttpClient) { }
  url:string='http://localhost:63654/client/get-active-client-codes';
  getActiveClients():Observable<string[]>{
    return this.http.get<string[]>(this.url,httpOptions).pipe(
      catchError(e=>throwError(e))
    );
  }
  handleError(errorin:string){
    return errorin;
}
}
