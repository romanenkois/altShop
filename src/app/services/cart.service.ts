import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  $Cart: any[] = [];
  constructor() { }

  addToCart(product: any) {
    this.$Cart.push(product);
  }

  getCart() {
    return this.$Cart;
  }
}
