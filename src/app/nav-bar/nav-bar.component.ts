import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  appUser;
  public isMenuCollapsed = true;
  constructor(private auth:AuthServiceService, private router:Router) { 

    auth.appuser$.subscribe(appUser=>{
          this.appUser = appUser;
    });
  }

  logOut(){
    this.auth.logOut();
    this.router.navigate(['/login']);
  }


  ngOnInit(): void {
  }

}
