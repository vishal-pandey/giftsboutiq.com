import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {

  category:any;
  product:any;

  constructor(
    private categoryService:CategoryService,
    private route: ActivatedRoute,
    private location: Location,
  ) {
    
    this.route.params.subscribe( params => {
      this.category = params.id
      this.categoryService.getProducts(this.category).subscribe((result)=>{
        this.product = result;
      });
    });
  }

  prlist = JSON.stringify(this.product);
  theProducts:any[];

  getProductDetail(theProduct){
    return this.categoryService.getProductDetail(theProduct);
  }

  ngOnInit() {
    
  }
}
