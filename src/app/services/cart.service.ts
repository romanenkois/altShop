import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartProduct } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  $Cart = new BehaviorSubject<Cart>({products: []});
   
  constructor() { }

  addToCart(productId: string): void {
    const products = [...this.$Cart.value.products];

    const productInCart = products.find((_product) => _product.id === productId)
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      products.push({id: productId, quantity: 1});
    }

    this.$Cart.next({products});

    console.log(this.$Cart.value.products);
  }

  removeQuantity(product: CartProduct): void {
    
    this.$Cart.value.products.map((_product) => {
      if (_product.id === product.id) {
        _product.quantity--;

        if(_product.quantity === 0) {
          this.removeFromCart(_product);
        }
      }
    })
  }

  removeFromCart(product: CartProduct): void {
    const filteredproducts = this.$Cart.value.products.filter(
       (_product) => product.id !== _product.id
    );

    this.$Cart.next({products: filteredproducts});
  }

  clearCart(): void {
    this.$Cart.next({ products: []})
  }

  getCart(): Array<CartProduct> {
    console.log(this.$Cart.value.products);
    return this.$Cart.value.products;
  }
}
