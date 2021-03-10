import { Component, Input, Output } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styles:[`.online{
        color:white;
    }
    .offline{
        color:yellow;
    }`]
})
export class ServerComponent{

   
serverId:number;
serverStatus:string='offline';
@Input()serverName:string = ''
constructor(){
   setInterval(()=>{
    this.serverStatus=(Math.random()>0.3 && this.serverName) ? 'online': 'offline';
   },5000)

   this.serverId = Math.round(Math.random()*10);
    
}
getColor(){
   return this.serverStatus === 'online' ? 'green' :'red';
}


}