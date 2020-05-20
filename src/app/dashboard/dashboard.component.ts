import { RenderModel } from './../models/RenderModel';
import { map } from 'rxjs/operators';
import { LBModel } from './../models/lbmodel';
import { AuthServiceService } from './../services/auth-service.service';
import { DashboardService } from './../services/dashboard.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy   {
 
  renderLender:RenderModel=null;
  renderBorrower:RenderModel=null;
  test:Observable<RenderModel>;
  lsub:Subscription;
  bsub:Subscription;

  private LENDER:string = "Lender";
  private BORROWER:string = "Borrower"
  constructor(private dashService:DashboardService) { 
     }

    async ngOnInit(){
      this.lsub=    (await this.dashService.getBorrower(this.LENDER)).subscribe(res=>{
            this.renderLender = new RenderModel(res);
               });

      this.bsub = (await this.dashService.getBorrower(this.BORROWER)).subscribe(res=>{
            this.renderBorrower = new RenderModel(res);
                });

        //  this.test = (await this.dashService.getBorrower2(this.BORROWER));
     }
     ngOnDestroy(){
       this.lsub.unsubscribe();
       this.bsub.unsubscribe();
     }






   

}
