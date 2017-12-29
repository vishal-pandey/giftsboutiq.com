import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import {CategoryService} from '../../services/category.service';
import {CartService} from '../../services/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private categoryService:CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private cartService:CartService,
  ) { 
    
   }

  
  
  
  

  product = this.route.snapshot.paramMap.get('id');
  theProduct = this.categoryService.getProductDetail(this.product);

  // getProductDetail(theProduct){
  //   return this.categoryService.getProductDetail(theProduct);
  // }


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


  ngOnInit() {
  }

}