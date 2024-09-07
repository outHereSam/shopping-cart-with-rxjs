import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { map, Observable } from 'rxjs';
import { CartItem } from '../../interfaces/ICartItems';
import { AsyncPipe } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, CartItemComponent],
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

  getTotalPrice(): Observable<number> {
    return this.cartItems$.pipe(
      map((cartItems) => {
        return cartItems.reduce((total, item) => {
          const cartItem = cartItems.find(
            (cartItem) => cartItem.id === item.id
          );
          return total + (cartItem?.price || 0) * item.quantity;
        }, 0);
      })
    );
  }
}
