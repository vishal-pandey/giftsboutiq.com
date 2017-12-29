import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuardService } from './auth-guard.service';
import { ProfileGuard } from './guards/profile.guard';
import { CheckoutGuard } from './guards/checkout.guard';

const routes: Routes = [
	{path: 'category/:id', component: CategoryComponent },
	{ path: 'category', redirectTo: '/', pathMatch: 'full' },
	{path: 'product/:id', component: ProductComponent },
	{path: 'viewcart', component: ViewcartComponent },
	{ path: 'product', redirectTo: '/', pathMatch: 'full' },
	{path: 'checkout', component: CheckoutComponent, canActivate:[CheckoutGuard] },
	{path: 'profile', component: ProfileComponent, canActivate:[ProfileGuard] },
	{path: 'login', component: LoginComponent, canActivate:[AuthGuardService] },
	{path: 'signup', component: LoginComponent, canActivate:[AuthGuardService] },
	// {path: 'signup/init', component: LoginComponent },


	{path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
