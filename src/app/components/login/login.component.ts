import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	lForm: FormGroup;
  sForm: FormGroup;
	post:any;
	mobile:string = "";
  password:string= "";
	rpassword:string= "";
  name:string = "";
  email:string = "";

  error:string;

  redirectUrl:string;
	
  constructor(
  	private fb:FormBuilder,
  	private userService:UserService,
    private router:Router,
    private cartService:CartService,
  ) {
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
  }

  mLogin(post){
  	this.mobile = post.mobile;
  	this.password = post.password;
  	this.userService.login(this.mobile, this.password).subscribe((result)=>{
      this.error = result.key
      if(result.key == "success"){
        this.userService.saveToken(result.value);
        this.cartService.updateCart();
        this.router.navigate(['']);
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
        alert("Sign Up Successful Click Ok to go to login page");
        this.router.navigate(['/login']);
      }else{
        this.error = result;
      }
    });
    return false;
  }

  path = window.location.pathname;
  isLogin(){
  	if (this.path=="/login") 
  		return true;
  	else
  		return false;
  }

  ngOnInit() {
  }

}
