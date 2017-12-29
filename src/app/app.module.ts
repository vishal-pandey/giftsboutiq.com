import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

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
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileGuard } from './guards/profile.guard';
import { CheckoutGuard } from './guards/checkout.guard';





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
    ViewcartComponent,
    CheckoutComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, CookieService, CartService, UserService, AuthGuardService, ProfileGuard, CheckoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
