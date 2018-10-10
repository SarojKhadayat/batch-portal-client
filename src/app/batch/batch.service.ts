import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Batch } from './batch.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class BatchService {
 
  constructor(private http:HttpClient){}
 getAllBatches(clientCode:string):Observable<Batch[]>{
 let url:string='http://localhost:63654/batch/get-all-batches';
  return this.http.get<Batch[]>(url,{params:{clientCode:clientCode}}).pipe(
    catchError(e=>throwError(e))
  );
}
startNewbatch(clientCode:string){
  let url:string='http://localhost:63654/batch-system/client-start';
  let request={
    "clientCode":clientCode
  };
  return this.http.post(url,request,httpOptions).pipe(catchError(e=>throwError(e)));
}
pauseResumeBatch(clientCode:string){
  let isPaused=false;
  let request={
    "clientCode":clientCode
  };
  let url=isPaused?'http://localhost:63654/batch-system/client-resume':'http://localhost:63654/batch-system/client-pause';
  return this.http.post(url,request,httpOptions).pipe(catchError(e=>throwError(e)));
}
handleError(errorin:string){
  return errorin;
}
}
