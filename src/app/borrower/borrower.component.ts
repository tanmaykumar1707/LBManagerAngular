import { Component, OnInit } from '@angular/core';
import { RenderModel } from '../models/RenderModel';
import { Observable } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {
  private BORROWER:string = "Borrower";
  renderBorrower$:Observable<RenderModel>;
  constructor(private dashService:DashboardService) {
   }

  async ngOnInit() {
    this.renderBorrower$ = (await this.dashService.getBorrower2(this.BORROWER));
  }

  async addReturn(returnData,key){
    await this.dashService.addReturn(this.BORROWER,returnData,key);
 
   }

  delete(key){
      this.dashService.deleteLB(this.BORROWER,key);
  }

  deleteReturn(key,returnKey){
    this.dashService.deleteLBReturn(this.BORROWER,key,returnKey);
  }

}
  