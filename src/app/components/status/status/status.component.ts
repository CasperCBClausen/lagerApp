import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../../services/status/status.service';
import { NotificationService } from '../../../services/notification/notification.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  events: string[] = [];

  constructor(
    private statusService: StatusService,
    private notificationService: NotificationService,
    private httpClient: HttpClient
  ) {
   }

  ngOnInit() {
    this.statusService.updateEvents();
    this.events = this.statusService.events;
  }
  
}
