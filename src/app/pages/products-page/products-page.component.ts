import { Component } from '@angular/core';
import { BridgeService } from 'src/app/services/bridge.service';
import { HostListener } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

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

  filter: string = '';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  constructor(private BridgeService: BridgeService, private route: ActivatedRoute) { 
    this.onResize();
  }

  writeToConsole(input: any) {
    console.log(input);
  }

  ngOnInit() {
    this.BridgeService.getProductsData().subscribe((data:any) => {  
      this.productsData = data;

      this.route.queryParams.subscribe(params => {
        this.filter = params['filter'] || '';
        this.displayProductsData = [];

        if (this.filter != '') {
          for (let i = 0; i < this.productsData.length; i++) {
            if (this.productsData[i].type === this.filter) {
              this.displayProductsData.push(this.productsData[i]);
            }
          }
        } else {
          this.displayProductsData = this.productsData;
        }
      });
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
