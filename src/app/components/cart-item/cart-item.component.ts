import { Component, Input } from '@angular/core';
import { CartItem } from '../../interfaces/ICartItems';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.sass',
})
export class CartItemComponent {
  @Input() data: CartItem = {
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

  constructor(protected cartService: CartService) {}
}
