import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No Server Was Created !!!';
serverName:string ='';
@Output() serverStatus = new EventEmitter<{status:boolean,name:string}>();


  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.allowNewServer = true;
    
  }

  onUpdateServerName(inputServer){
    this.serverName = (<HTMLInputElement>inputServer.target).value;
    this.serverCreationStatus= 'Server was Created!!' + this.serverName;
    this.serverStatus.emit({status:this.allowNewServer,name:this.serverName});
    console.log(inputServer);
  }

}
