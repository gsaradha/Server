import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit,OnChanges {
@Input() serverName:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log("serverName" + this.serverName);
  }

}
