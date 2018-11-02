import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../../services/status/status.service';
import { NotificationService } from '../../../services/notification/notification.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LogItem } from 'src/app/classes/LogItem';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  log: LogItem[];

  constructor(private route: ActivatedRoute,
    private statusService: StatusService,
    private notificationService: NotificationService,
    private httpClient: HttpClient
  ) {
   }

  ngOnInit() {
    this.log = this.notificationService.log != null ? this.notificationService.log.reverse() : this.notificationService.log;
  }
  
}
