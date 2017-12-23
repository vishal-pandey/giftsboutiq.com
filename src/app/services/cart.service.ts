import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CartService {

	products=[];

  constructor(
  		private cookieService:CookieService,
  	) 
  { 
    if (this.cookieService.check("products")) {
    	// this.cookieService.set("products",JSON.stringify(this.products),360000,"/");
      // this.cookieService.set("products","[]",360000,"/");
      // alert(this.cookieService.get("products"));
      // this.cookieService.delete("products","/");
      this.products = JSON.parse(this.cookieService.get("products"));
    }else{
      // this.products=[];
      // alert("hi");
    }
      // this.products=[1,2,3,4];
    // this.cookieService.set("products","");
  }

  addProduct(productId){
    this.products.push(productId);
    this.cookieService.set("products",JSON.stringify(this.products),360000,"/");
  }

}
