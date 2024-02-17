import { Component } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-products-page',
  templateUrl: 'products-page.component.html',
  styles: [
  ]
})
export class ProductsPageComponent {
  productsData: any[] = [];
  displayProductsData: any[] = [];

  columns: number = 5;
  screenHeight: number = 0;
  screenWidth: number = 0;


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  constructor(private BridgeService: BridgeService) { this.onResize();}

  ngOnInit() {
    this.BridgeService.getProductsData().subscribe((data:any) => {  
      this.productsData = data;
      this.displayProductsData = this.productsData;
    });

    if (this.screenWidth < 500) {
      this.columns = 1;
    } else if (this.screenWidth < 720) {
      this.columns = 2;
    } else if (this.screenWidth < 960) {
      this.columns = 3;
    } else if (this.screenWidth < 1200) {
      this.columns = 5;
    }
  }
}
