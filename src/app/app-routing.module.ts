import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';

const routes: Routes = [
	{path: 'category/:id', component: CategoryComponent },
	{ path: 'category', redirectTo: '/', pathMatch: 'full' },
	{path: 'product/:id', component: ProductComponent },
	{path: 'viewcart', component: ViewcartComponent },
	{ path: 'product', redirectTo: '/', pathMatch: 'full' },
	{path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
