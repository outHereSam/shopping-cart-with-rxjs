import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../interfaces/ICartItems';
import { AsyncPipe } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass',
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;
  cartQuantity$: Observable<number>;
  constructor(protected cartService: CartService) {
    this.cartItems$ = cartService.getCartItems();
    this.cartQuantity$ = cartService.cartQuantity$;
  }
}
