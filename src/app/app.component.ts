import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server';
  serverStatus:boolean = false;
  serverNameToDisplay:string = '';
  onServerStatus(event:Event){
    this.serverStatus = event['status'];
    this.serverNameToDisplay = event['name'];
    console.log("***"+ this.serverNameToDisplay['name']);
  }
}
