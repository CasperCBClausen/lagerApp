import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../../notification/notification.service';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
  }

  getName() {
    return this.constructor.name.split('ApiService')[0];
  }

  get<T>(methodName?: string, data?: HttpParams) {

    let paramsUrl = this.setMethodName(methodName)

    return this.http.get<T>(API_URL + '/' + this.getName() + paramsUrl, { params: data });
      // .subscribe(
      //   response => { return response }, // response from the server if successful
      //   error => { this.handleErrorResponse(error) }, // Error from the server if something goes bad
      //   () => { "this is run if the call completes successfully" }); // if the entire call is successful.

  }

  post(data: any, methodName?: string, params?: HttpParams) {
    let paramsUrl = this.setMethodName(methodName)

    return this.http.post(API_URL + '/' + this.getName() + paramsUrl, data, { params: params });
      // .subscribe(
      //   response => { this.notificationService.notify('success', "Oprettet", response.toString()) }, // response from the server if successful
      //   error => { this.handleErrorResponse(error) }, // Error from the server if something goes bad
      //   () => { "this is run if the call completes successfully" }); // if the entire call is successful.
  }

  put(data: any, methodName?: string, params?: HttpParams) {
    let paramsUrl = this.setMethodName(methodName)

    this.http.put(API_URL + '/' + this.getName() + paramsUrl, data, { params: params })
      .subscribe(
        response => { this.notificationService.notify('success', "Update", response.toString()) }, // response from the server if successful
        error => { this.handleErrorResponse(error) }, // Error from the server if something goes bad
        () => { "this is run if the call completes successfully" }); // if the entire call is successful.

  }

  delete(methodName?: string, data?: HttpParams) {
    let paramsUrl = this.setMethodName(methodName)

    this.http.delete(API_URL + '/' + this.getName() + paramsUrl, { params: data })
      .subscribe(
        response => { this.notificationService.notify('success', "Delete", response.toString()) },
        error => { this.handleErrorResponse(error) },
        () => { });

  }

  getRequestOptions(): RequestOptions {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return new RequestOptions({ headers: headers });
  }

  handleErrorResponse(error: any) {
    if (error.status == 504) {
      this.notificationService.notify('error', error.status, "Kunne ikke kontakte rest api.");
    } else if (error.status == 404) {
      this.notificationService.notify('error', error.status, error.message);
    } else {
      this.notificationService.notify('error', error.status, error.message);
    }
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

  setMethodName(methodName?: string) {
    return methodName ?
      "/" + methodName // methodName
      : ""; // No methodName
  }

}
