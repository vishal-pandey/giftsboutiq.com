import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Http } from '@angular/http';
import { UserService } from './user.service';

@Injectable()
export class CartService {

	products=[];
  token:string;

  constructor(
  		private cookieService:CookieService,
      private http:Http,
      private userService:UserService,
  	) 
  { 
    if (this.cookieService.check("products")) {
      this.products = JSON.parse(this.cookieService.get("products"));
    }
    if (this.userService.isLoggedIn()){
      this.token = this.cookieService.get('jwt');
    }
  }


  updateCart(){
    this.token = this.cookieService.get('jwt');
    this.http.post("http://api.giftsboutiq.com/cart/get.php", {
      "token": this.token,
    }).map(res => res.text()).subscribe((result)=>{
      let cproducts = JSON.parse(this.cookieService.get("products"));
      let sproduct = JSON.parse(result);
      this.products = this.arrayUnique(cproducts.concat(sproduct));
      // console.log(this.products);
      this.http.post("http://api.giftsboutiq.com/cart/add.php", {
        "token": this.token,
        "value": JSON.stringify(this.products),
      }).map(res => res.text()).subscribe((result)=>{});
    });
  }

  plusone(productId){
    for (var i in this.products) {
      if (this.products[i].id == productId) {
        if (this.products[i].val < 10) {
          this.products[i].val += 1;
          this.cookieService.set("products",JSON.stringify(this.products),360000,"/");
          if(this.userService.isLoggedIn()){
            this.http.post("http://api.giftsboutiq.com/cart/add.php", {
              "token": this.token,
              "value": JSON.stringify(this.products),
            }).map(res => res.text()).subscribe((result)=>{

            });
          }
          break;
        }
      }
    }
  }

  minusone(productId){
    for (var i in this.products) {
      if (this.products[i].id == productId) {
        if (this.products[i].val > 1) {
          this.products[i].val -= 1;
          this.cookieService.set("products",JSON.stringify(this.products),360000,"/");
          if(this.userService.isLoggedIn()){
            this.http.post("http://api.giftsboutiq.com/cart/add.php", {
              "token": this.token,
              "value": JSON.stringify(this.products),
            }).map(res => res.text()).subscribe((result)=>{

            });
          }
          break;
        }
      }
    }
  }

  arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
        if(a[i].id === a[j].id)
          a.splice(j--, 1);
      }
    }
    return a;
  }



  addProduct(productId){
    let toadd = {"id": productId, "val":1};
    this.products.push(toadd);
    this.cookieService.set("products",JSON.stringify(this.products),360000,"/");
    if(this.userService.isLoggedIn()){
      this.http.post("http://api.giftsboutiq.com/cart/add.php", {
        "token": this.token,
        "value": JSON.stringify(this.products),
      }).map(res => res.text()).subscribe((result)=>{

      });
    }
  }

  removeProduct(productId){
    let toRemove:object;
    for(let pr of this.products){
      if (pr.id == productId) {
        toRemove = pr;
        break;
      }
    }
    this.products.splice(this.products.indexOf(toRemove), 1);
    this.cookieService.set("products",JSON.stringify(this.products),360000,"/");
    if(this.userService.isLoggedIn()){
      this.http.post("http://api.giftsboutiq.com/cart/add.php", {
        "token": this.token,
        "value": JSON.stringify(this.products),
      }).map(res => res.text()).subscribe((result)=>{
        
      });
    }
  }


  placeOrder(token, order, cost){
    return this.http.post("http://api.giftsboutiq.com/order/place.php", {
      "token": token,
      "order": order,
      "cost": cost
    }).map(res => res.text());
  }

  commitOrder(){
    this.products = [];
    this.cookieService.set("products",JSON.stringify(this.products),360000,"/");
    return this.http.post("http://api.giftsboutiq.com/cart/add.php", {
      "token": this.token,
      "value": JSON.stringify(this.products),
    }).map(res => res.text());
  }


}
