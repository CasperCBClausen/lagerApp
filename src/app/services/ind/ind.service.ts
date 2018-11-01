import { Injectable } from '@angular/core';
import { Shipping } from '../../classes/Shipping';
import { SelectItem } from 'primeng/components/common/api';
import { NotificationService } from '../notification/notification.service';
import { SpinnerService } from '../spinner/spinner.service';
import { StatusService } from '../status/status.service';
import { ProductApiService } from '../apiservices/product/product-api.service';
import { Product } from 'src/app/classes/Product';
import { ShippingApiService } from '../apiservices/shipping/shipping-api.service';

@Injectable({
  providedIn: 'root'
})
export class IndService {

  constructor(
    private notificationService: NotificationService,
    private statusService: StatusService,
    private productApiService: ProductApiService,
    private shippingApiService: ShippingApiService
  ) {

  }

}
