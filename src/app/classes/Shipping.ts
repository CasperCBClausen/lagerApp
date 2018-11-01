import {Product} from './Product';

export class Shipping {
  id: number;
  transType: string;
  imeisn: string;
  product: Product;
  origin: string;
  invoice: string;
  date: Date;
  deliveryMethod: string;
  trackingNumber: string;
}