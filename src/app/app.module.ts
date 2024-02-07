import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';

import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

registerLocaleData(uk);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ProductsPageComponent,
    ProductPageComponent,
    Error404PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: uk_UA }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
