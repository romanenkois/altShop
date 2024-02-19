import { Component } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: 'product-page.component.html',
  styles: [
  ]
})
export class ProductPageComponent {
  product: any | undefined;
  constructor(private BridgeService: BridgeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.BridgeService.getProductData("6589bb0e5deba33acc975e6c").subscribe((data:any) => {  

      this.product = data;

      this.BridgeService.getImage(this.product.image).subscribe((data:any) => {
        this.product.image = data;
      });
    });

    // this.route.queryParams.subscribe(params => {
    //   console.log(params['productId']);
    //   if (params['productId']) {

    //     this.BridgeService.getProductData(params['productId']).subscribe((data:any) => {  
    //       this.productData = data;
    //     });
    //   } else {
    //     window.location.href = '/error404';
    //   }

    //   console.log(this.productData, "pr");
    // });
    
  }
}
