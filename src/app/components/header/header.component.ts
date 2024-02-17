import { Component } from '@angular/core';
import {Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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
  isOutlineActive = true;

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {}
  
  // Debug feauture to show the outline of all elements
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

  // Method to navigate the user to the products page with or without parameters
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
  }
}
