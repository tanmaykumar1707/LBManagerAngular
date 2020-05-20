import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-lb',
  templateUrl: './add-new-lb.component.html',
  styleUrls: ['./add-new-lb.component.css']
})
export class AddNewLBComponent implements OnInit {
 
  type:string="";
  constructor(private dash:DashboardService,
      private router: Router) { }


  addNew(val){

    this.dash.addNew(this.type,val).then(res=>{
          this.router.navigate(['/'+this.type]);
    });

  }

  ngOnInit(): void {
  }

}
