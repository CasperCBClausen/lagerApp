import { Injectable } from '@angular/core';
import { BaseApiService } from '../base/base-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shipping } from 'src/app/classes/Shipping';
import { Observable } from 'rxjs';
import { NotificationService } from '../../notification/notification.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class ShippingApiService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAllActiveShippings() {
    return super.get<any>("GetAllActiveShippings");
  }

  getShippingFromImeisn(imeisn: string){
    let data = super.setData(["imeisn"], [imeisn])

    return super.get<any>("GetShippingFromImeisn", data);
  }

  updateShipping(shipping: Shipping){
    return super.put(shipping);
  }
}
