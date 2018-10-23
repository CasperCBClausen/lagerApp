import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getName() {
    return this.constructor.name.split('ApiService')[0];
  }

  get(methodName?: string, data?: HttpParams) {

    let paramsUrl = this.setMethodName(methodName)

    this.http.get(API_URL + '/' + this.getName() + paramsUrl, { params: data })
      .subscribe(
        response => { console.log(response) },
        error => { console.log(error) },
        () => { console.log("get completed!") });

  }

  post(data:any, methodName?: string, params?: HttpParams) {
    let paramsUrl = this.setMethodName(methodName)

    this.http.post(API_URL + '/' + this.getName() + paramsUrl, data, { params: params })
      .subscribe(
        response => { console.log(response) },
        error => { console.log(error) },
        () => { console.log("get completed!") });

  }

  put(methodName?: string, data?: HttpParams) {
    let paramsUrl = this.setMethodName(methodName)

    this.http.post(API_URL + '/' + this.getName() + paramsUrl, { params: data })
      .subscribe(
        response => { console.log(response) },
        error => { console.log(error) },
        () => { console.log("get completed!") });

  }

  delete(methodName?: string, data?: HttpParams) {
    let paramsUrl = this.setMethodName(methodName)

    this.http.post(API_URL + '/' + this.getName() + paramsUrl, { params: data })
      .subscribe(
        response => { console.log(response) },
        error => { console.log(error) },
        () => { console.log("get completed!") });

  }

  getRequestOptions(): RequestOptions {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return new RequestOptions({ headers: headers });
  }

  //Crude implementation, expects the position of key to match position of value
  setData(keys: string[], values: string[]) {
    let data = new HttpParams();
    if (keys.length == 0) {
      return new HttpParams();
    } else {
      for (let i = 0; i < keys.length; i++) {
        data = data.set(keys[i], values[i]);
      }
      return data;
    }
  }

  setMethodName(methodName?:string){
    return methodName ?
       "/" + methodName // methodName
      :  ""; // No methodName
  }

}
