import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem } from '../interfaces/ICartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$ = new BehaviorSubject<CartItem[]>([]);
  cartQuantity$ = this.cart$.pipe(
    map((cart) => {
      return cart.reduce(
        (quantity, cartItem) => quantity + cartItem.quantity,
        0
      );
    })
  );

  constructor() {}

  getCartItems() {
    return this.cart$;
  }

  increaseItemQuantity(item: CartItem) {
    const cart = this.cart$.value;
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id); // find the item in the cart

    if (itemInCart) {
      // if the item is already in the cart,increase the item's quantity by 1
      // else set the item's quantity to 1
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      this.cart$.next(updatedCart);
    } else {
      this.cart$.next([...cart, { ...item, quantity: 1 }]);
    }
  }

  reduceItemQuantity(item: CartItem) {
    const cart = this.cart$.value;
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (itemInCart && itemInCart.quantity > 1) {
      // if the item is already in the cart and the quantity is greater than 1,
      // reduce the item's quantity by 1
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      this.cart$.next(updatedCart);
    } else {
      // Remove the item from the cart
      const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
      this.cart$.next(updatedCart);
    }
  }

  removeItemFromCart(item: CartItem) {
    const cart = this.cart$.value;
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    this.cart$.next(updatedCart);
  }

  clearCart() {
    this.cart$.next([]);
  }
}
