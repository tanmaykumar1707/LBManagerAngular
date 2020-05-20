import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RenderModel } from '../models/RenderModel';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.css']
})
export class LenderComponent implements OnInit {
  returnview:boolean=true;
  private LENDER:string = "Lender"
  renderLender$:Observable<RenderModel>;
  constructor(private dashService:DashboardService) {
   }

  async ngOnInit() {
    this.renderLender$ = (await this.dashService.getBorrower2(this.LENDER));
  }

  async addReturn(returnData,key){
   await this.dashService.addReturn(this.LENDER,returnData,key);

  }
  delete(key){
    this.dashService.deleteLB(this.LENDER,key);
}
  deleteReturn(key,returnKey){
    this.dashService.deleteLBReturn(this.LENDER,key,returnKey);
  }

}
 