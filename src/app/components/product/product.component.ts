import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import {CategoryService} from '../../services/category.service';
import {CartService} from '../../services/cart.service';
import {RatingService} from '../../services/rating.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = this.route.snapshot.paramMap.get('id');
  theProduct = {"pid":"","cid":"","name":"","price":"","sprice":"","description":"","qty":""};


  rForm: FormGroup;
  pid:string = this.product;
  rating:string;
  name:string;
  email:string;
  comment:string;

  reviews=[];



  constructor(private categoryService:CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private cartService:CartService,
    private ratingService:RatingService,
    private fb:FormBuilder,
  ) { 
      this.rForm = fb.group({
        'rating': [1,Validators.required],
        'name': [null, Validators.required],
        'email': [null, Validators.required],
        'comment': [null, Validators.required],
      });


      this.categoryService.getProductDetail(this.product).subscribe((result)=>{
        this.theProduct = result;
      });
   }

  addToCart(){
    this.cartService.addProduct(this.theProduct.name);
  }

  isAdded(){
    for(var x of this.cartService.products){
      if (this.theProduct.name === x.id) {
        return true;
      }
    }
    return false;
  }

  buyNow(){
    if (!this.isAdded()) {
      this.addToCart();
    }
    this.router.navigate(['/checkout']);
  }


  submitReview(post){
    let data = {
      "pid": this.pid,
      "rating": post.rating,
      "name": post.name,
      "email": post.email,
      "comment": post.comment
    }
    this.ratingService.submitReview(this.pid, post.rating, post.name, post.email, post.comment)
    .subscribe((result)=>{
      if (result == "success") {
        alert("Thanks for your review It Would be published when approved");
      }
    })
  }


  ngOnInit() {
    this.ratingService.fetchReview(this.product).subscribe((result)=>{
      this.reviews = result;
    });
  }

}