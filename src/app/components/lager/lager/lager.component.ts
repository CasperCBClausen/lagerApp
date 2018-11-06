import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Shipping } from 'src/app/classes/Shipping';
import { ShippingApiService } from 'src/app/services/apiservices/shipping/shipping-api.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Product } from 'src/app/classes/Product';
import { ProductApiService } from 'src/app/services/apiservices/product/product-api.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-lager',
  templateUrl: './lager.component.html',
  styleUrls: ['./lager.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LagerComponent implements OnInit {

  shippings: Shipping[];
  cols: any[];
  products: Product[];
  dateRanges: any;

  constructor(private shippingApiService: ShippingApiService,
    private productApiService: ProductApiService,
    private notificationService: NotificationService) { }

  @ViewChild('dt') private _table: Table;
  ngOnInit() {
    var _self = this;
    this._table.filterConstraints['myDateRangeFilter'] = (value, filter): boolean => {
      // get the from/start value
      var s = _self.dateRanges[0].getTime();
      var e;
      // the to/end value might not be set
      // use the from/start date and add 1 day
      // or the to/end date and add 1 day
      if (_self.dateRanges[1]) {
        e = _self.dateRanges[1].getTime() + 86400000;
      } else {
        e = s + 86400000;
      }
      // compare it to the actual values
      return new Date(value).getTime() >= s && new Date(value).getTime() <= e;
    }

    this.updateShippings();
    this.productApiService.getAllProducts().subscribe(
      res => { this.products = res }
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

  debugMethod(value, value2) {
    debugger

  }
}
