import { map } from 'rxjs/operators';
import { ReturnData } from './ReturnModel';
import { JsonPipe } from '@angular/common';
 

export class LBModel{
    public return_da?:ReturnData[]=[];
    public am_return?:number;

        public amount:number;
        public date:string;
        public key:string;
        public name:string;
        public purpose:string;
        public return_data:{[key:string]:ReturnData}[][]
  
        constructor(data:LBModel ){
                this.amount = data.amount;
                this.date = data.date;
                this.key = data.key;
                this.name = data.name;
                this.purpose = data.purpose;
                this.return_data=data.return_data;
       
                if(this.return_data){
                        // this.return_data.forEach((val:any)=>{
                        //     this.return_da.push({...val});
                        // })
                        for(let prod in this.return_data ){
                            let it1:any = this.return_data[prod];
                                this.return_da.push(it1);
                        }
                    
                }

                
                if(this.return_da){
                    this.am_return=0;
                    for(let da of this.return_da )
                            this.am_return+=da.amount_return;
                }else 
                    this.am_return =0;
                   
    }



    
    

}