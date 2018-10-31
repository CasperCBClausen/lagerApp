import {Product} from '../classes/Product';

export class Lager {
  id: number;
  transType: string;
  imeisn: string;
  product: Product;
  origin: string;
  invoice: string;
  date: Date;
  deliveryMethod: string;
  tracking: string;
}