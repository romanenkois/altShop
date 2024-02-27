import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartProduct } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  $Cart = new BehaviorSubject<Cart>(
    {
      products: []
    }
  );
  constructor() { }

  addToCart(product: CartProduct) {

    this.$Cart.value.products.push(product);
  }

  getCart(): Array<any> {
    return this.$Cart.value.products;
  }
}
