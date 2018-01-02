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
import { RatingService } from './services/rating.service';







// UI Developement
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatTabsModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import { ExcerptPipe } from './excerpt.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';


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
    ProfileComponent,
    ExcerptPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatMenuModule, 
    MatIconModule, 
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDialogModule
  ],
  providers: [CategoryService, CookieService, CartService, UserService, AuthGuardService, ProfileGuard, CheckoutGuard, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
