import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';
import { IndService } from '../../services/ind/ind.service';
import { Shipping } from '../../classes/Shipping';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../services/notification/notification.service';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { ProductApiService } from 'src/app/services/apiservices/product/product-api.service';
import { Product } from 'src/app/classes/Product';
import { ShippingApiService } from 'src/app/services/apiservices/shipping/shipping-api.service';

@Component({
  selector: 'ind',
  templateUrl: './ind.component.html',
  styleUrls: ['./ind.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndComponent implements OnInit, OnDestroy {

  constructor(
    private indService: IndService,
    private notificationService: NotificationService,
    private spinnerService: SpinnerService,
    private productApiService: ProductApiService,
    private shippingApiService: ShippingApiService
  ) {
  }

  newShipping: Shipping = new Shipping();

  newProduct: Product = new Product();

  newShippingDetails = Object.keys(this.newShipping);
  rememberedInputs: string[];

  products: Product[];
  origins: SelectItem[];
  deliveryMethods: SelectItem[];

  ngOnInit() {
    //TODO read values from local storage if any saved
    this.newShipping.date = new Date();
    this.newShipping.product = new Product();
    this.newShipping.product.name = "Samsung S7 Sort";
    this.newShipping.product.sku = "PH-SAM-BLK";
    this.newShipping.origin = "Leverandør";
    this.newShipping.deliveryMethod = "TNT";

    this.origins = [
      { label: 'Leverandør', value: 'Leverandør' },
      { label: 'Kunde', value: 'Kunde' },
      { label: 'Værksted', value: 'Værksted' }
    ];

    this.deliveryMethods = [
      { label: 'TNT', value: 'TNT' },
      { label: 'GLS', value: 'GLS' },
      { label: 'PostNord', value: 'PostNord' },
      { label: 'DHL', value: 'DHL' }
    ];

    this.rememberedInputs = ['product', 'origin', "invoice", 'date', 'deliveryMethod', 'tracking', 'imeisn'];
    this.updateProducts();
  }

  ngOnDestroy() {
  }

  //Run this whenever a product is added or removed
  updateProducts() {
    this.productApiService.getAllProducts().subscribe(
      res => { this.products = res },
      err => { }
    );

  }

  async createProduct() {
    if (!this.newProduct.name) {
      this.notificationService.notify('error', '', 'udfyld produkt navn');
      return;
    }
    if (!this.newProduct.sku) {
      this.notificationService.notify('error', '', 'udfyld produkt sku');
      return;
    }

    this.productApiService.post(this.newProduct).subscribe(
      response => {
        this.notificationService.notify('success', "", "Produkt Oprettet")
        this.updateProducts();
      }); // response from the server if successful
  }

  sendShippingToStorage() {
    if (!this.newShipping.date) {
      this.notificationService.notify('error', '', 'vælg dato');
      return false;
    }
    if (!this.newShipping.deliveryMethod) {
      this.notificationService.notify('error', '', 'vælg leveringsmetode');
      return false;
    }
    if (!this.newShipping.imeisn) {
      this.notificationService.notify('error', '', 'udfyld imeisn');
      return false;
    }
    if (!this.newShipping.invoice) {
      this.notificationService.notify('error', '', 'udfyld faktura');
      return false;
    }
    if (!this.newShipping.origin) {
      this.notificationService.notify('error', '', 'udfyld fra');
      return false;
    }
    if (!this.newShipping.product) {
      this.notificationService.notify('error', '', 'vælg produkt');
      return false;
    }
    if (!this.newShipping.trackingNumber) {
      this.notificationService.notify('error', '', 'udfyld tracking');
      return false;
    }

    this.newShipping.transType = "Lager";

    this.shippingApiService.post(this.newShipping).subscribe(
      response => {
        this.notificationService.notify('success', "", "Vare lagt på lageret")
      }); // response from the server if successful

    //this.statusService.createEvent("Tilføjet vare til lager med imei: "+ this.newShipping.imeisn);
    //this.notificationService.notify('success', 'OK', 'Vare sendt til lager');

    return true;
  }
}
