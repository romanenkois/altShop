import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'product',
    component: ProductPageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
