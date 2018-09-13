import { Component } from '@angular/core';

import { TeamsdataService } from './teamsdata.service';



  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  newBank = ''; // for the UI binding demo
bankNames: string[];
  constructor(public service: TeamsdataService) {
  this.bankNames = ['SBI', 'AXIS'];
  }
 
  ngOnInit() {
  }
// form add name
  addToList = function() {
    this.service.postToBackEnd()
    .subscribe(successCode => {
       this.statusCode = successCode;
       
     },
     errorCode => this.statusCode = errorCode
     );
this.bankNames.push(this.newBank);
  }
// remove name
removeToList = function(index){
this.bankNames.splice(index, 1);
  }}
