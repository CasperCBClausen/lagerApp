import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LogItem } from 'src/app/classes/LogItem';


type Severities = 'success' | 'info' | 'warn' | 'error';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationChange: Subject<Object> = new Subject<Object>();
  logChange: Subject<string> = new Subject<string>();
  log: LogItem[];

  constructor() { }

  
  notify(severity: Severities, summary: string, detail: string) {
    this.notificationChange.next({ severity, summary, detail });
  }

  logAction(name: string, action:string, value: any, date: Date){
    let logItem = new LogItem();
    logItem.user = name;
    logItem.action = action;
    logItem.value = value;
    logItem.date = date;
    if(this.log != null){
      this.log.push(logItem);
    }else{
      this.log = [];
      this.log.push(logItem);
    }
  }


}
