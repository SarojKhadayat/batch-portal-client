import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
private currentClientSource=new Subject<string>();
currentClient$=this.currentClientSource.asObservable();
constructor() { }
setCurrentClient(client:string){
  this.currentClientSource.next(client);
}
getCurrentClient(){
 return this.currentClientSource;
}
}
