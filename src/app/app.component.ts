import { Component } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server';
  serverStatus:boolean = false;
  serverNameToDisplay:string = '';
  username:string = '';
  isVisible:boolean =false;
  logged:any= [];
  today= new Date();

  onServerStatus(event:Event){
    this.serverStatus = event['status'];
    this.serverNameToDisplay = event['name'];
  }

  resetValues(){
    this.username = '';
  }
  onDisaplyDetails(){
    this.isVisible = !this.isVisible;
     this.logged.push(formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530'));

  }
}
