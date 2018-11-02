import { Component, OnInit } from '@angular/core';
import { Shipping } from 'src/app/classes/Shipping';
import { ShippingApiService } from 'src/app/services/apiservices/shipping/shipping-api.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Product } from 'src/app/classes/Product';
import { ProductApiService } from 'src/app/services/apiservices/product/product-api.service';

@Component({
  selector: 'app-lager',
  templateUrl: './lager.component.html',
  styleUrls: ['./lager.component.scss']
})
export class LagerComponent implements OnInit {

  shippings: Shipping[];
  cols: any[];
  products: Product[];
  
  constructor(private shippingApiService: ShippingApiService,
    private productApiService: ProductApiService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.updateShippings();
    this.productApiService.getAllProducts().subscribe(
      res => { this.products = res;
        debugger}
    );
    this.cols = [
      { field: 'imeisn', header: 'imeisn' },
      { field: 'product', header: 'Produkt' },
      { field: 'invoice', header: 'Faktura' },
      { field: 'origin', header: 'Fra' },
      { field: 'deliveryMethod', header: 'Forsendelsesmetode' },
      { field: 'trackingNumber', header: 'tracking nummer' },
      { field: 'date', header: 'Dato oprettet' }
    ];
  }

  updateShippings() {
    this.shippingApiService.getAllActiveShippings().subscribe(
      res => {
        this.shippings = res;
      }
    )
  }
}
