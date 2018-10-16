import { Injectable } from '@angular/core';
import {Lager } from '../../classes/lager';
import { Message, SelectItem } from 'primeng/components/common/api';

@Injectable({
  providedIn: 'root'
})
export class LagerService {

  msgs: Message[] = [];

  showInStatus = false;

  indTelefon: Lager = {
    product: 'Samsung S7 Sort',
    name: "",
    id: "",
    date: new Date(),
    tracking: "",
    imei: "",
    origin: 'Leverandør',
    deliveryMethod: 'TNT'
  };

  
  indTelefonDetails = Object.keys(this.indTelefon);

  rememberedInputs: string[] = ['product', 'origin', 'name', 'id', 'date', 'deliveryMethod', 'tracking', 'imei'];

  
  phones: SelectItem[];
  origins: SelectItem[];
  deliveryMethods: SelectItem[];
  
  constructor() {
    this.phones = [
      { label: 'Samsung S7 Sort', value: 'Samsung S7 Sort' },
      { label: 'Apple IPhone 7', value: 'Apple Iphone 7' },
      { label: 'Razer Phone', value: 'Razer Phone' },
      { label: 'OnePlus3', value: 'OnePlus3' }
    ];

    this.origins = [
      { label: 'Leverandør', value: 'Leverandør' },
      { label: 'Kunde', value: 'Kunde' },
      { label: 'Værksted', value: 'Værksted' }
    ];

    this.deliveryMethods = [
      { label: 'TNT', value: 'TNT' },
      { label: 'GLS', value: 'GLS' },
      { label: 'PostNord', value: 'PostNord' },
      { label: 'DHL', value: 'DHL' }
    ];
   }

  resizeOnClick(square: string) {
    let indSquare = document.getElementById("indSquare");
    let udSquare = document.getElementById("udSquare");
    let statusSquare = document.getElementById("statusSquare");
    let lagerSquare = document.getElementById("lagerSquare");

    switch (square) {
      case "ind": {
        //Resize ind
        indSquare.style.height = "75vh";
        indSquare.style.width = "75%";
        indSquare.style.zIndex = "1";
        udSquare.style.height = "75vh";
        udSquare.style.width = "25%";
        udSquare.style.zIndex = "0";
        statusSquare.style.height = "25vh";
        statusSquare.style.width = "50%";
        statusSquare.style.zIndex = "0";
        lagerSquare.style.height = "25vh";
        lagerSquare.style.width = "50%";
        lagerSquare.style.zIndex = "0";
        break;
      }
      case "ud": {
        //Resize ud
        indSquare.style.height = "75vh";
        indSquare.style.width = "25%";
        indSquare.style.zIndex = "0";
        udSquare.style.height = "75vh";
        udSquare.style.width = "75%";
        udSquare.style.zIndex = "1";
        statusSquare.style.height = "25vh";
        statusSquare.style.width = "50%";
        statusSquare.style.zIndex = "0";
        lagerSquare.style.height = "25vh";
        lagerSquare.style.width = "50%";
        lagerSquare.style.zIndex = "0";
        break;
      }
      case "status": {
        //Resize status
        indSquare.style.height = "25vh";
        indSquare.style.width = "50%";
        indSquare.style.zIndex = "0";
        udSquare.style.height = "25vh";
        udSquare.style.width = "50%";
        udSquare.style.zIndex = "0";
        statusSquare.style.height = "75vh";
        statusSquare.style.width = "75%";
        statusSquare.style.zIndex = "1";
        lagerSquare.style.height = "75vh";
        lagerSquare.style.width = "25%";
        lagerSquare.style.zIndex = "0";
        break;
      }
      case "lager": {
        //Resize lager
        indSquare.style.height = "25vh";
        indSquare.style.width = "50%";
        indSquare.style.zIndex = "0";
        udSquare.style.height = "25vh";
        udSquare.style.width = "50%";
        udSquare.style.zIndex = "0";
        statusSquare.style.height = "75vh";
        statusSquare.style.width = "25%";
        statusSquare.style.zIndex = "0";
        lagerSquare.style.height = "75vh";
        lagerSquare.style.width = "75%";
        lagerSquare.style.zIndex = "1";
        break;
      }
    }
  }

  sendToStorage() {
    if (!this.indTelefon.date) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Manglende info', detail: 'vælg dato' });
      return;
    }
    if (!this.indTelefon.deliveryMethod) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Manglende info', detail: 'vælg leveringsmetode' });
      return;
    }
    if (!this.indTelefon.id) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Manglende info', detail: 'udfyld Faktura/ID' });
      return;
    }
    if (!this.indTelefon.imei) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Manglende info', detail: 'udfyld imei' });
      return;
    }
    if (!this.indTelefon.name) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Manglende info', detail: 'udfyld navn' });
      return;
    }
    if (!this.indTelefon.origin) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Manglende info', detail: 'udfyld fra' });
      return;
    }
    if (!this.indTelefon.product) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Manglende info', detail: 'vælg produkt' });
      return;
    }
    if (!this.indTelefon.tracking) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Manglende info', detail: 'udfyld tracking' });
      return;
    }
    this.showInStatus = !this.showInStatus;
    if (this.showInStatus) {
      setTimeout(() => { this.resizeOnClick("status") }, 50);
    }

  }
}
