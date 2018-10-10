import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BatchDetail } from './batch-detail';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchDetailService {

  constructor(private http:HttpClient) { }
  getBatchDetail(clientCode:string,batchProcessingSeq:number){
    let url:string='http://localhost:63654/batch/get-batch-details';
    return this.http.get<BatchDetail[]>(url,{params:{clientCode:clientCode}}).pipe(
    catchError(e=>throwError(e))
  );
  }
}
