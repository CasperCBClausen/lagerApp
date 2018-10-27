import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-infoboard',
  templateUrl: './infoboard.component.html',
  styleUrls: ['./infoboard.component.scss']
})
export class InfoboardComponent implements OnInit {

  
  clock:Date = new Date();
  merchSold: number = 7;
  totalValue: number = 3400*this.merchSold;
  totalProfit: number = this.totalValue-(2540*this.merchSold); 
  constructor() { }

  ngOnInit() {
    this.startClock();
  }

  startClock(){
    setInterval(() => {         //replaced function() by ()=>
      this.clock = new Date();
    }, 1000);
  }
}
