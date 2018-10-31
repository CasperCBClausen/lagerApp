import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, finalize } from "rxjs/internal/operators";
import { NotificationService } from '../notification/notification.service';
import { SpinnerService } from '../spinner/spinner.service';

@Injectable()
export class ErrorHandlerService implements HttpInterceptor {

  constructor(
    private notificationService: NotificationService,
    private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let handleObs =  next.handle(req);
    // return handleObs.pipe(catchError((error, caught) => {
    //   //intercept the respons error and handle it
    //   this.handleErrorResponse(error);
    //   return of(error);
    // }) as any);
    this.spinnerService.notify(true);
    return next.handle(req).pipe(
      tap(
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'succeeded';
          }
        },
        error => this.handleErrorResponse(error)
      ),
      finalize(() => {
       this.spinnerService.notify(false);
      }) as any);
  }

  handleErrorResponse(error: any) {
    if (error.status == 504) {
      this.notificationService.notify('error', error.status, "Kunne ikke kontakte rest api.");
    } else if (error.status == 200) {
      if (error.error != null) {
        this.notificationService.notify('error', "", error.error.text);
      } else {
        this.notificationService.notify('error', error.status, error.message);
      }
    } else {
      this.notificationService.notify('error', error.status, error.message);
    }
  }
}