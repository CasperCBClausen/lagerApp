import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';
import { IndService } from '../../services/ind/ind.service';
import { Lager } from '../../classes/lager';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../services/notification/notification.service';
import { SpinnerService } from '../../services/spinner/spinner.service';

@Component({
  selector: 'ind',
  templateUrl: './ind.component.html',
  styleUrls: ['./ind.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndComponent implements OnInit, OnDestroy {

  constructor(
    private indService: IndService,
    private notificationService: NotificationService,
    private spinnerService: SpinnerService
  ) {
    this.showInStatus = indService.showInStatus;
    this.indTelefon = indService.indTelefon;
    this.indTelefonDetails = indService.indTelefonDetails;
    this.rememberedInputs = indService.rememberedInputs;
    this.phones = indService.phones;
    this.origins = indService.origins;
    this.deliveryMethods = indService.deliveryMethods;
  }
  showInStatus = false;

  indTelefon: Lager;


  indTelefonDetails;
  rememberedInputs: string[];

  phones: SelectItem[];
  origins: SelectItem[];
  deliveryMethods: SelectItem[];

  ngOnInit(){

  }

  ngOnDestroy(){
  }

  resizeOnClick(square: string) {
    this.indService.resizeOnClick(square);
  }

  sendToStorage() {
    this.spinnerService.notify(true);
    this.showInStatus = this.indService.sendToStorage();
    this.spinnerService.notify(false);
    // if(this.showInStatus){
    //   setTimeout(() => { this.resizeOnClick("status") }, 50);
    // }
  }
}
