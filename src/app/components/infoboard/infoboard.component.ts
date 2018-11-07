import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import { ShippingApiService } from 'src/app/services/apiservices/shipping/shipping-api.service';

@Component({
  selector: 'app-infoboard',
  templateUrl: './infoboard.component.html',
  styleUrls: ['./infoboard.component.scss']
})
export class InfoboardComponent implements OnInit {

  
  clock:Date = new Date();
  merchInStorage: number;
  merchInStorageThisMonth: number;
  merchSold: number;
  merchSoldThisMonth: number;
  profitThisMonth: number;
  profitTotal: number; 
  constructor(private shippingApiService: ShippingApiService) { }

  ngOnInit() {
    this.startClock();
    this.shippingApiService.getCompletedShippings().subscribe(
      res => {
        this.merchSold = res.length;
        this.merchSoldThisMonth = res.filter(shipping => new Date(shipping.date).getMonth() == new Date().getMonth()).length;
      }
    )
    this.shippingApiService.getAllActiveShippings().subscribe(
      res => {
        this.merchInStorage = res.length;
        this.merchInStorageThisMonth = res.filter(shipping => new Date(shipping.date).getMonth() == new Date().getMonth()).length;
      }
    )
  }

  startClock(){
    setInterval(() => {         //replaced function() by ()=>
      this.clock = new Date();
    }, 1000);
  }
}
