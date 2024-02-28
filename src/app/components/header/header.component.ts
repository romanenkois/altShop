import { Component, Input } from '@angular/core';
import {Renderer2} from '@angular/core';
import { Router } from '@angular/router';
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

  cartItems:any | undefined = [] ;
  isOutlineActive = true;

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

  ngOnInit() {
    if (this.isOutlineActive) {
      this.applyOutlineStyle(document.body);
    }
    this.cartItems = this.CartService.getCart();
  }
}
