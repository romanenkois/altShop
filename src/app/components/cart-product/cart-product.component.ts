import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/models/cart.model';
import { BridgeService } from 'src/app/services/bridge.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: 'cart-product.component.html',
  styles: [
  ]
})
export class CartProductComponent {
  @Input() cartProduct: CartProduct | undefined;
  renderedCartProduct: any = {};

  constructor(private BridgeService: BridgeService,  private router: Router) { }

  ngOnInit() {
    if (this.cartProduct) {
      this.BridgeService.getProductData(this.cartProduct?.id).subscribe((data:any) => {  

        this.renderedCartProduct = data;
  
        this.BridgeService.getImage(this.renderedCartProduct.image).subscribe((data:any) => {
          this.renderedCartProduct.image = data;
        });
      });
    }
  }   
}
