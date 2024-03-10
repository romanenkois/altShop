import { Component, Input } from '@angular/core';
import {Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CartProduct } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: [`
    .header-spacer {
      flex: 1 1 auto;
    }
  `
  ]
})
export class HeaderComponent {
  
  @Input() renderCartButton: boolean | undefined = true;

  cart: Cart = {products: []};

  debugMode: boolean = true;
  isOutlineActive = false;

  constructor(private CartService: CartService,private renderer: Renderer2, private router: Router) {}
  
  toogleDebugOutline() {
    this.isOutlineActive = !this.isOutlineActive;
    this.applyOutlineStyle(document.body);
  }
  
  private applyOutlineStyle(element: HTMLElement) {
    if (this.isOutlineActive) {
      this.renderer.addClass(element, 'debug');
    } else {
      this.renderer.removeClass(element, 'debug');
    }

    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      this.applyOutlineStyle(children[i] as HTMLElement);
    }
  }

  navigateUserToProducts(filter: string | undefined): void {
    if (!filter) {
      this.router.navigate(['./products']);
    } else {
      this.router.navigate(['./products'], { queryParams: { filter } });
    }
    
  }

  debugWriteCart() {
    console.log(this.cart.products);
    console.log(this.cart.products.length);
  }

  ngOnInit() {
    if (this.isOutlineActive) {
      this.applyOutlineStyle(document.body);
    }

    this.CartService.$Cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
    })
  }
}
