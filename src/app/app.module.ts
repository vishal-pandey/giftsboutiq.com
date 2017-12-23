import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryService } from './services/category.service';
import { HomeComponent } from './components/home/home.component';
import { HeaderAComponent } from './components/header-a/header-a.component';
import { ProductComponent } from './components/product/product.component';


import { CookieService } from 'ngx-cookie-service';
import { CartService } from './services/cart.service';
import { UserService } from './services/user.service';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    HomeComponent,
    HeaderAComponent,
    ProductComponent,
    CartComponent,
    UserComponent,
    ViewcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CategoryService, CookieService, CartService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
