import { Component } from '@angular/core';
import { Client } from '../app/shared/models/client.model';
import { ClientService } from '../app/client/client.service';
import { SharedService } from './shared/services/shared.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SharedService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'batch portal';
  defaultClient="RPE";
  constructor(private route:ActivatedRoute,
    private router:Router){
      //this.selectedClientCode=this.route.snapshot.paramMap.get('clientCode')?this.route.snapshot.paramMap.get('clientCode'):this.activeClients[0];   
}
changeRoute(routeName:string){
  if(this.route.firstChild.firstChild){
    let clientCode=this.route.firstChild.firstChild.snapshot.paramMap.get('clientCode');
    this.defaultClient=clientCode
  }
  this.router.navigate(['/clients/'+this.defaultClient+'/'+routeName]);
} 
}
