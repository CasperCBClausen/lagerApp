import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';
import { IndService } from '../../services/ind/ind.service';
import { Lager } from '../../classes/Lager';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../services/notification/notification.service';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { ProductApiService } from 'src/app/services/apiservices/product/product-api.service';
import { Product } from 'src/app/classes/Product';

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
    private productApiService: ProductApiService
  ) {
    this.showInStatus = indService.showInStatus;
    this.indTelefon = indService.indTelefon;
    this.indTelefonDetails = indService.indTelefonDetails;
    this.rememberedInputs = indService.rememberedInputs;
    //this.phones = indService.phones;
    this.origins = indService.origins;
    this.deliveryMethods = indService.deliveryMethods;
  }
  showInStatus = false;

  indTelefon: Lager;

  newProduct: Product = new Product();

  indTelefonDetails;
  rememberedInputs: string[];

  products: Product[];
  origins: SelectItem[];
  deliveryMethods: SelectItem[];

  ngOnInit() {
    this.productApiService.getAllProducts().subscribe(apiPhones => {
      this.products = apiPhones;
    },
      error => {
        this.notificationService.notify('error', "apiError", error);
      });
  }

  ngOnDestroy() {
  }

  resizeOnClick(square: string) {
    this.indService.resizeOnClick(square);
  }

  sendToStorage() {
    this.spinnerService.notify(true);
    this.showInStatus = this.indService.sendToStorage();
    this.spinnerService.notify(false);
    // if(this.showInStatus){
    //   setTimeout(() => { this.resizeOnClick("status") }, 50);
    // }
  }

  createProduct(){
    this.productApiService.post(this.newProduct);
  }
}
