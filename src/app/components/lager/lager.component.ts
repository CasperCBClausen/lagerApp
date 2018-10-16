import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';
import { LagerService } from '../../services/lager/lager.service';

@Component({
  selector: 'lager',
  templateUrl: './lager.component.html',
  styleUrls: ['./lager.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LagerComponent implements OnInit {

  constructor(
    private lagerService: LagerService
  ) {
  }

  ngOnInit() {
  }

}
