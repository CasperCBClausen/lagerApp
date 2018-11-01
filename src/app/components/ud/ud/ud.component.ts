import { Component, OnInit } from '@angular/core';
import { ShippingApiService } from 'src/app/services/apiservices/shipping/shipping-api.service';
import { Shipping } from 'src/app/classes/Shipping';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-ud',
  templateUrl: './ud.component.html',
  styleUrls: ['./ud.component.scss']
})
export class UdComponent implements OnInit {

  imeisn: string = "";
  shipping: Shipping;

  constructor(
    private shippingApiService : ShippingApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  getShippingsByImeisn(){
    this.shippingApiService.getShippingFromImeisn(this.imeisn).subscribe(
      res => { this.shipping = res },
      err => {}
    );
  }

  sendShippingFromStorage(){
    this.shipping.transType = "ud";
    this.shippingApiService.updateShipping(this.shipping).subscribe(
      res => { 
        this.notificationService.notify('success', "", "Vare fjernet fra lager");
        this.imeisn = "";
        this.shipping = null;
      }
    );
  }
}
