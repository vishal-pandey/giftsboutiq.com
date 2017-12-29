import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CartService } from '../services/cart.service';

@Injectable()
export class CheckoutGuard implements CanActivate{
  constructor(
    private cartService:CartService,
    private router:Router,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let url: string = state.url;

    return this.checkCart();
  }
  checkCart(){
  	if (this.cartService.products.length > 0) {
  		return true;
  	}else{
  		this.router.navigate(['/viewcart']);
  		return false;
  	}
  }
}
