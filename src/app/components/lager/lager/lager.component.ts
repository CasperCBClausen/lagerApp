import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Shipping } from 'src/app/classes/Shipping';
import { ShippingApiService } from 'src/app/services/apiservices/shipping/shipping-api.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Product } from 'src/app/classes/Product';
import { ProductApiService } from 'src/app/services/apiservices/product/product-api.service';
import { Table } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { Dropdown } from 'primeng/primeng';

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
  selectedProduct: any;

  constructor(private shippingApiService: ShippingApiService,
    private productApiService: ProductApiService,
    private notificationService: NotificationService,
    private confirmationService: ConfirmationService) { }

  @ViewChild('dt') private _table: Table;

  ngOnInit() {
    this.createFilterConstraints();

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

  deleteShipping(shipping){
    this.confirmationService.confirm({
      message: 'Er du sikker på du vil fjerne denne vare fra lageret?',
      acceptLabel: 'Ja',
      rejectLabel: 'Nej',
      accept: () => {
        shipping.transType = "manualRemoved";
        this.shippingApiService.updateShipping(shipping).subscribe(
          res => { 
            this.notificationService.notify('success', "", "Vare manuelt fjernet fra lager");
            this.notificationService.logAction("LAGER", "Fjernede vare manuelt med imeisn:", shipping.imeisn, new Date())
            this.shippings = this.shippings.splice(this.shippings.findIndex( element => element.imeisn == shipping.imeisn),1);
          }
        );
      }
    });
  }

  clearDropdown(dropdown: Dropdown){
    dropdown.value = null;
  }

  createFilterConstraints(){
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

    this._table.filterConstraints['clearXFilter'] = (value, filter): boolean => {
       return true;
    }
  }
}
