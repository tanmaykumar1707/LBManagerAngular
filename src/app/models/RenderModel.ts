import { LBModel } from './lbmodel';


export class RenderModel{

    public lb:LBModel[]=[];
    constructor( totalData:any[]){
        for(let d in totalData){
            
            this.lb.push(new LBModel(totalData[d]));
        }

    }


    get totalAmount(){
        let totalBorrow=0;
        if(this.lb){
          for(let b of this.lb){
            totalBorrow+= b.amount;
        }
        return totalBorrow;
        }else 
        return 0;
    }

    get totalReturn(){
        let returnAmout=0;
        for(let b of this.lb){
            returnAmout+=b.am_return; 
        }
        return returnAmout;
    }

}