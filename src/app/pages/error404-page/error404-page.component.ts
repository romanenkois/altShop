import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404-page',
  templateUrl: 'error404-page.component.html',
  styles: [
  ]
})

export class Error404PageComponent {
  constructor(private router: Router) {}

  redirectHome: Boolean = true;
  dots: string = ".";

  ngOnInit() {
    if (this.redirectHome) {
      setTimeout(() => {
        this.router.navigate(['./home']);
      }, 10000); 
      
      setInterval(() => {
        if (this.dots.length < 3) {
          this.dots += ".";
        } else {
          this.dots = ".";
        }
      }, 1000);
    }
  }
}
