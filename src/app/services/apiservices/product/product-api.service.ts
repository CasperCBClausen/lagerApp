import { Injectable } from '@angular/core';
import { BaseApiService } from '../base/base-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Lager } from 'src/app/classes/lager';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends BaseApiService {

  constructor(http:HttpClient) {
    super(http);
  }

  getAllProducts(){
    super.get("getAll");
  }

  getMyProducts(items:string[]){

    let keysAndValues = this.getKeysAndValues(items);
    let data = super.setData(keysAndValues[0], keysAndValues[1]);

    super.get("getMyProducts", data);
  }

  saveProduct(item: Lager){
    super.post(item, "saveProduct");
  }

  getKeysAndValues(items:string[]){
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
