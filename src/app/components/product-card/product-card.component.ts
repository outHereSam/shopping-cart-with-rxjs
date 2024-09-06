import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/IProduct';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/ICartItems';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.sass',
})
export class ProductCardComponent {
  @Input() productData: CartItem = {
    id: 0,
    image: {
      main: '',
      thumbnail: '',
    },
    name: '',
    category: '',
    price: 0,
    quantity: 0,
  };

  constructor(private cartService: CartService) {}

  addToCart(product: CartItem) {
    this.cartService.addToCart(product);
  }
}
