import { Injectable } from '@angular/core';
import { Lager } from '../../classes/Lager';
import { SelectItem } from 'primeng/components/common/api';
import { NotificationService } from '../notification/notification.service';
import { SpinnerService } from '../spinner/spinner.service';
import { StatusService } from '../status/status.service';
import { ProductApiService } from '../apiservices/product/product-api.service';
import { Product } from 'src/app/classes/Product';

@Injectable({
  providedIn: 'root'
})
export class IndService {

  showInStatus = false;

  indTelefon: Lager = {
    id: null,
    transType: "ind",
    product: {id: null, name:"Samsung S7 Sort", sku:"PH-SAM-BLK"},
    date: new Date(),
    tracking: "",
    imeisn: "",
    origin: 'Leverandør',
    invoice: "",
    deliveryMethod: 'TNT'
  };


  indTelefonDetails = Object.keys(this.indTelefon);

  rememberedInputs: string[] = ['product', 'origin', 'name', 'id', 'date', 'deliveryMethod', 'tracking', 'imei'];


  //phones: SelectItem[];
  origins: SelectItem[];
  deliveryMethods: SelectItem[];

  constructor(
    private notificationService: NotificationService,
    private statusService: StatusService,
    private productApiService: ProductApiService
  ) {

    // this.phones = [
    //   { label: 'Samsung S7 Sort', value: 'Samsung S7 Sort' },
    //   { label: 'Apple IPhone 7', value: 'Apple Iphone 7' },
    //   { label: 'Razer Phone', value: 'Razer Phone' },
    //   { label: 'OnePlus3', value: 'OnePlus3' }
    // ];

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
        indSquare.style.zIndex = "0";
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
        udSquare.style.zIndex = "0";
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
        statusSquare.style.zIndex = "0";
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
        lagerSquare.style.zIndex = "0";
        break;
      }
    }
  }

  sendToStorage() {
    //this.productApiService.getMyProducts(["Samsung:galaxy s7,galaxy 5", "Apple:iphone6,iphone7"]);
    //this.productApiService.getAllProducts();
    //this.productApiService.saveProduct(this.indTelefon);
    if (!this.indTelefon.date) {
      this.notificationService.notify('error', 'Manglende info', 'vælg dato');
      return false;
    }
    if (!this.indTelefon.deliveryMethod) {
      this.notificationService.notify('error', 'Manglende info', 'vælg leveringsmetode');
      return false;
    }
    if (!this.indTelefon.imeisn) {
      this.notificationService.notify('error', 'Manglende info', 'udfyld imei');
      return false;
    }
    if (!this.indTelefon.invoice) {
      this.notificationService.notify('error', 'Manglende info', 'udfyld faktura');
      return false;
    }
    if (!this.indTelefon.origin) {
      this.notificationService.notify('error', 'Manglende info', 'udfyld fra');
      return false;
    }
    if (!this.indTelefon.product) {
      this.notificationService.notify('error', 'Manglende info', 'vælg produkt');
      return false;
    }
    if (!this.indTelefon.tracking) {
      this.notificationService.notify('error', 'Manglende info', 'udfyld tracking');
      return false;
    }

      this.statusService.createEvent("Tilføjet vare til lager med imei: "+ this.indTelefon.imeisn);
      this.notificationService.notify('success', 'OK', 'Vare sendt til lager');

    return true;
  }
}
