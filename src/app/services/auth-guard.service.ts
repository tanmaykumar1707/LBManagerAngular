import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthServiceService,
              private router:Router
            ) { }

  canActivate(route,state:RouterStateSnapshot){
    return this.auth.appuser$.pipe(map(user=>{
      if(user) return true;
      this.router.navigate(['/login']);
      return false;
    }))
        

  }
}
