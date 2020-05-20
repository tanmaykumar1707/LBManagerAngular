import { AuthServiceService } from './auth-service.service';
import { LBModel } from './../models/lbmodel';
import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { RenderModel } from '../models/RenderModel';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private db:AngularFireDatabase,
              private auth:AuthServiceService) {

   }
  

 async getBorrower(type:string){
     let uid:string = await this.auth.getid()
     console.log(uid);
     return this.db.list(type+'/'+uid).valueChanges();
   
  }
  async getBorrower2(type:string):Promise<Observable<RenderModel>>{
    let uid:string = await this.auth.getid()
    return this.db.list(type+'/'+uid).valueChanges().pipe(map(res=>{
      return new RenderModel(res);
    }));
 }

 async addNew(type:string,val){
     let uid:string = await this.auth.getid();
      let d = this.db.list(type+'/'+uid).push(val);
      d.then(res=>{
        this.db.object(type+'/'+uid+'/'+res.key).set({key:res.key,...val});
      });

    }

    async addReturn(type:string,returnVal,key){
      let uid:string = await this.auth.getid();
      let dbRef =  this.db.list(type+'/'+uid+'/'+key+"/return_data");
      let d= dbRef.push(returnVal);
      d.then(res=>{
         this.db.list(type+'/'+uid+'/'+key+"/return_data/"+res.key+'/').set('key',res.key);
      });
    }

    async  deleteLB(type,key){
      let uid:string = await this.auth.getid();
      this.db.object(type+'/'+uid+'/'+key).remove();
    }

    async  deleteLBReturn(type,key,returnKey){
      let uid:string = await this.auth.getid();
      this.db.object(type+'/'+uid+'/'+key+"/return_data/"+returnKey).remove();
    }

}
