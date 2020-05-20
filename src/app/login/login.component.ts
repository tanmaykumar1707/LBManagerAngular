import { AuthServiceService } from './../services/auth-service.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private loginAuth:AuthServiceService,
              private router:Router) { 
                
              }

  onLogin(loginData){
    
    this.loginAuth.login(loginData['email'],loginData['password'])
    .then(res=>{

      this.router.navigate(['']);
    }).catch(res=>{

    });
   
  }

  user(){

  }

  ngOnInit(): void {
  }

}
