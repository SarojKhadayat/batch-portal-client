import { Component, OnInit } from '@angular/core';
import { BatchDetail } from './batch-detail';

@Component({
  selector: 'app-batch-detail',
  templateUrl: './batch-detail.component.html',
  styleUrls: ['./batch-detail.component.css']
})
export class BatchDetailComponent implements OnInit {
batchDetail:BatchDetail;
  constructor() { }

  ngOnInit() {

  }

}
