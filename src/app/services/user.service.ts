import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(
  	private http:Http,
  	private cookieService:CookieService,
  	private router:Router,
  ) { }

  redirectUrl:string;

  saveToken(token){
  	this.cookieService.set("jwt",token,360000,"/");
  }


  getUser(){
  	let token = this.cookieService.get('jwt');
  	return this.http.post("http://api.giftsboutiq.com/user/", {
    	"token": token,
		}).map(res => res.json());
  }


  getOrders(){
    let token = this.cookieService.get('jwt');
    return this.http.post("http://api.giftsboutiq.com/order/retrive.php", {
      "token": token,
    }).map(res => res.json());
  }

  logOut(){
  	this.cookieService.delete('jwt',"/");
  	window.location.reload();
  }

  isLoggedIn(){
  	// return this.http.get("http://api.giftsboutiq.com/user/").map(res=>res.text());
  	if(this.cookieService.check("jwt")){
  		return true;
  	}else{
  		return false;
  	}
  }

	login(mobile, password){
	  return this.http.post("http://api.giftsboutiq.com/login/index.php", {
    	"mobile": mobile,
    	"password": password
		}).map(res => res.json());
	}
  signup(name, mobile, email, password, rpassword){
   return this.http.post("http://api.giftsboutiq.com/signup/", {
      "name":name,
      "mobile":mobile,
      "email":email,
      "password":password,
      "rpassword":rpassword,
    }).map(res => res.text()); 
  }

  updateAddress(address){
    let token = this.cookieService.get('jwt');
    this.http.post("http://api.giftsboutiq.com/user/updateaddress.php", {
      "token": token,
      "address": address
    }).map(res => res.json()).subscribe((result)=>{
      this.cookieService.set("jwt",result.value,360000,"/");
    });
    return true;
  }
}


// this.http.get("https://jsonplaceholder.typicode.com/posts").map(res => res.json());
