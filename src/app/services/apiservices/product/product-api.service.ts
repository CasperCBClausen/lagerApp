import { Injectable } from '@angular/core';
import { BaseApiService } from '../base/base-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/classes/Product';
import { NotificationService } from '../../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAllProducts() {
    return super.get<any>("GetAllProducts");
  }

  getMyProducts(items: string[]) {

    let keysAndValues = this.getKeysAndValues(items);
    let data = super.setData(keysAndValues[0], keysAndValues[1]);

    super.get("getMyProducts", data);
  }

  getKeysAndValues(items: string[]) {
    let keys: string[] = [];
    let values: string[] = [];
    items.forEach(element => {
      let keyValues = element.split(':');
      keys.push(keyValues[0]);
      values.push(keyValues[1]);
    });

    return [keys, values];
  }
}
