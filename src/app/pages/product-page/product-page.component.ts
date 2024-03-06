import { Component } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: 'product-page.component.html',
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 500px;
        line-height: 500px;
        background: var(--main-color);
        color: #000000;
        overflow: hidden;
      }
    `
  ]
})

export class ProductPageComponent {
  product: any | undefined = [];
  constructor(private BridgeService: BridgeService, private CartService: CartService, private route: ActivatedRoute) { }

  effect = 'scrollx';

  addToCart(product: any) {
    this.CartService.addToCart(product._id);
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const productId = params['productId'];

      this.BridgeService.getProductData(productId).subscribe((data:any) => {  

        this.product = data;
  
        this.BridgeService.getImage(this.product.image).subscribe((data:any) => {
          this.product.image = data;
        });

        for (let i = 0; i < this.product.images.length; i++) {
          this.BridgeService.getImage(this.product.images[i]).subscribe((data:any) => {
            try {
              const parsedData = JSON.parse(data);
              this.product.images[i] = parsedData.image;
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          });
        }
      });
    });  
  }
}