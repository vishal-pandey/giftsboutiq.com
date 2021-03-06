import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CategoryService } from '../../services/category.service';
import { LoginComponent } from '../login/login.component';
import { ViewcartComponent } from '../viewcart/viewcart.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	
	categories = this.categoryService.category;

	// address:boolean = false;

	lForm: FormGroup;
  sForm: FormGroup;
  aForm: FormGroup;
	post:any;
	mobile:string = "";
  password:string= "";
	rpassword:string= "";
  name:string = "";
  email:string = "";
  address:string;
  addresstab = true;
  addindex="1";
  user = {};
  error:string;
  redirectUrl:string;





  // viewcart functions
  products = this.cartService.products;
  prArray = [];
	getProductDetail(pr){
    for(let prs of this.prArray){
      if (pr == prs.name) {
        return prs;
      }
    }
  }

  getTotal(){
    let total=0;
    for(let pr of this.products){
      let pall = {"pid":"","cid":"","name":"","price":"","sprice":"","description":"","qty":""};
      for(let prs of this.prArray){
        if (pr.id == prs.name) {
          pall = prs;
        }
      }
      let price = parseInt(pall.sprice);
      let qty = parseInt(pr.val);
      total += (price*qty);
    }
    return total;
  }

  getpTotal(){
    let total=0;
    for(let pr of this.products){
      let pall = {"pid":"","cid":"","name":"","price":"","sprice":"","description":"","qty":""};
      for(let prs of this.prArray){
        if (pr.id == prs.name) {
          pall = prs;
        }
      }
      let price = parseInt(pall.price);
      let qty = parseInt(pr.val);
      total += (price*qty);
    }
    return total;
  }




  
	
  constructor(
  	private fb:FormBuilder,
  	private userService:UserService,
    private router:Router,
    private cartService:CartService,
    private categoryService: CategoryService,
    private cookieService:CookieService,
    // private viewcartComponent:ViewcartComponent,
  ) {
  	let addresss;
  	this.lForm = fb.group({
  		'mobile': [null, Validators.required],
  		'password': [null, Validators.required],
  	});
    this.sForm = fb.group({
      'name': [null, Validators.required],
      'mobile': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'rpassword': [null, Validators.required],
    });
    if (this.userService.isLoggedIn()) {
	  	this.getAddress();
    }

    this.aForm = fb.group({
  		"address": [null,Validators.required],
  	});

  	for(let pr of this.products){
      this.categoryService.getProductDetail(pr.id).subscribe((result)=>{
        // this.theProduct = result;
        this.prArray.push(result);
        // console.log(result);
      });    
    }

  }

  toggleAddTab(){
  	this.getAddress();
  	if (this.addindex=="1") {
	  	this.addresstab = false;
      this.addindex="2";
  	}else{
  		this.addresstab = true;
      this.addindex="1";
  	}
  }

  getAddress(){
  	this.userService.getUser().subscribe((result)=>{
		  	this.address = result.address;
		  	this.user = result;
		  });
  }
  

  mLogin(post){
  	this.mobile = post.mobile;
  	this.password = post.password;
  	this.userService.login(this.mobile, this.password).subscribe((result)=>{
      
      if(result.key == "success"){
        this.userService.saveToken(result.value);
        this.cartService.updateCart();
        this.getAddress();
        window.location.reload();
        // this.address = true;
        // this.router.navigate(['']);
      }else{
      	this.error = result.key;
        alert(this.error);	
      }

  	});
  	return false;
  }

  mSignup(post){
    this.name = post.name;
    this.mobile = post.mobile;
    this.email = post.email;
    this.password = post.password;
    this.rpassword = post.rpassword;

    this.userService.signup(this.name, this.mobile, this.email, this.password, this.rpassword).subscribe((result)=>{
      if (result == "success") {
      	this.userService.login(this.mobile, this.password).subscribe((result)=>{

		      if(result.key == "success"){
		        this.userService.saveToken(result.value);
		        this.cartService.updateCart();
		        this.getAddress();
		        // this.address = true;
		        // this.router.navigate(['']);
		      }else{
		      	this.error = result.key;
            alert(this.error);	
		      }
		  	});
        // alert("Sign Up Successful Click Ok to go to login page");
        // this.router.navigate(['/login']);
      }else{
        this.error = result;
        alert(this.error);
      }
    });
    return false;
  }

  submitAddress(post){
  	this.address = post.address;
  	if(this.userService.updateAddress(this.address)){
  		this.addresstab = false;
  	}
  }



  placeOrder(){
  	let token = this.cookieService.get('jwt');
  	let order = JSON.stringify(this.cartService.products);
  	let cost = this.getTotal();
  	let toSend = {
  		"token": token,
  		"order": order,
  		"cost": cost
  	}
  	this.cartService.placeOrder(token, order, cost).subscribe((result)=>{
  		if (result == "success") {
  			this.cartService.commitOrder().subscribe((result)=>{
  				this.router.navigate(['/profile']);
  			})
  		}else{
  			console.log(result);
  		}
  	});
  }





  ngOnInit() {
  	
  }

}
