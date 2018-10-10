import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ClientService } from '../client/client.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  activeClients:string[]=[];
  selectedClientCode:string="RPE";
  currentComponent:string;
  constructor(private _clientService:ClientService,private route:ActivatedRoute,
    private router:Router) {
      if(this.route.snapshot && this.route.snapshot.firstChild){
        this.selectedClientCode= this.route.snapshot.firstChild.params["clientCode"];
      }
    }

  ngOnInit() {
    this._clientService.getActiveClients().subscribe(clients=>{
      this.activeClients=clients;
  });
}
  changeClientCode(clientCode:string){
    this.selectedClientCode=clientCode;
    this.currentComponent=this.route.firstChild.firstChild.snapshot.routeConfig.path;
    this.router.navigate(['/clients/'+this.selectedClientCode+'/'+this.currentComponent]);
  }
}
