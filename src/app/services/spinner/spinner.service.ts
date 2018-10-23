import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinnerChange: Subject<Object> = new Subject<Object>();

  constructor() { }

  
  notify(spinning:boolean) {
    this.spinnerChange.next(spinning);
  }
}
