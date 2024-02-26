import { Component } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: 'product-page.component.html',
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
        margin-bottom: 0;
        user-select: none;
      }
    `
  ]
})

export class ProductPageComponent {
  product: any | undefined = [];
  constructor(private BridgeService: BridgeService, private route: ActivatedRoute) { }

  effect = 'scrollx';
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const productId = params['productId'];

      this.BridgeService.getProductData(productId).subscribe((data:any) => {  

        this.product = data;
  
        this.BridgeService.getImage(this.product.image).subscribe((data:any) => {
          this.product.image = data;
        });

        for (let i = 0; i < this.product.images.length; i++) {
          console.log(this.product.images[i]);
          this.BridgeService.getImage(this.product.images[i]).subscribe((data:any) => {
            try {
              const parsedData = JSON.parse(data);
              const value: string = parsedData.image;
              console.log(value);
              this.product.images[i] = value;
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          });
        }
      });
    });  
  }
}