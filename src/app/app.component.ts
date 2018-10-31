import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from './services/spinner/spinner.service';
import { Subscription } from 'rxjs';
import { Message } from 'primeng/primeng';
import { NotificationService } from './services/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'lagerApp';

  spin = 0;
  spinnerSubscription: Subscription;

  msgs: Message[] = [];
  notificationSubscription: Subscription;

  constructor(
    private spinnerService: SpinnerService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef
  ){ }

  ngOnInit(){
    this.subscribeToSpinning();
    this.subscribeToNotifications();
  }

  ngOnDestroy(){
    this.spinnerSubscription.unsubscribe();
    this.notificationSubscription.unsubscribe();
  }

  subscribeToSpinning() {
    this.spinnerSubscription = this.spinnerService.spinnerChange
    .subscribe((spinning:boolean) => {
      if(spinning){
        this.spin++;
      }else{
        this.spin--;
      }
      this.ref.detectChanges();
    });
  }

  subscribeToNotifications() {
    this.notificationSubscription = this.notificationService.notificationChange
    .subscribe(notification => {
      this.msgs = [];
      this.msgs.push(notification);
    });
  }
}
