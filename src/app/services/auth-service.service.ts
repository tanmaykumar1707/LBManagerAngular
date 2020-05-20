import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  detail:Promise<any>;
  authState$:Observable<firebase.User>
  constructor
  (private authfire:AngularFireAuth
  ) {

      this.authState$ = this.authfire.authState;
   }

   login(email,pass){
    return this.detail = this.authfire.signInWithEmailAndPassword(email,pass);
   }

   register(email,pass){
     return this.authfire.createUserWithEmailAndPassword(email,pass);
   }

   logOut(){
     return this.authfire.signOut();
   }

   get appuser$(){

    return this.authState$;


  }
  getid(){
     return this.authfire.currentUser.then(user=>{
          return user.uid;
      })
   }

}
