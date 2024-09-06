import { Product } from './IProduct';

export interface CartItem extends Product {
  quantity: number;
}
