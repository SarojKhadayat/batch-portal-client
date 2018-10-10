import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Batch } from './batch.model';
import { BatchService } from './batch.service';
import { SharedService } from '../shared/services/shared.service';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  providers: [SharedService],
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit,OnDestroy {
selectedClientCode:string;
navigationSubscription;
batches:Batch[]=[];
isPaused:boolean=false;
  constructor(private _batchService:BatchService , private route:ActivatedRoute,private router:Router) {
  this.navigationSubscription=this.router.events.subscribe((e:any)=>{
    if(e instanceof NavigationEnd){
      this.selectedClientCode =this.route.snapshot.pathFromRoot[2].params["clientCode"];
      this.getBatches();
    }
  })}
  ngOnInit() {
    this.getBatches();
  }
  getBatches(){
    this._batchService.getAllBatches(this.selectedClientCode).subscribe(batches=>{
    this.batches=batches
  });
}
startNewBatch(){
  this._batchService.startNewbatch(this.selectedClientCode).subscribe();
}
pauseResumeBatch(){
  this._batchService.pauseResumeBatch(this.selectedClientCode).subscribe();
}
getBatchDetail(seq:number){
  //[routerLink]="['./batchDetail',batch.batchSeq]
  this.router.navigate(['batchDetail',seq],{relativeTo:this.route});
}
ngOnDestroy(){
  if(this.navigationSubscription){
    this.navigationSubscription.unsubscribe();
  }
}
}
