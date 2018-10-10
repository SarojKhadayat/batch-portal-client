import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { BatchComponent } from './batch/batch.component';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { BatchDetailComponent } from './batch-detail/batch-detail.component';
const routes:Routes=[
  { path:'clients',component:ClientsComponent,children:[
    {path:':clientCode',component:ClientComponent,
    children:[
       { path:'batch',component:BatchComponent,children:[
       ] },
       { path:'client',component:ClientComponent },
       {path:'batch/batchDetail/:seq',component:BatchDetailComponent}
      ]},
],
runGuardsAndResolvers:'always'},
{ path:'',component:ClientsComponent },
];
   
@NgModule({
  imports: [
    RouterModule.forRoot(routes,{enableTracing:true,onSameUrlNavigation:'reload'})
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { 
 
}
