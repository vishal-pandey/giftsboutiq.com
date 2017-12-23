import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	// nu=[1,2,3,4,5,6,9];
	nu:number[];
	

  constructor(private categoryService:CategoryService,
    private route: ActivatedRoute,
    private location: Location,
    ) { 
    this.pList();
  }

  
  category = this.route.snapshot.paramMap.get('id');

  product = this.categoryService.getProducts(this.category);

  prlist = JSON.stringify(this.product);
  theProducts:any[];

  pList(){
    this.theProducts=[];
    for(var pr in this.product){
      this.theProducts.push(pr);
    }
  }


  getProductDetail(theProduct){
    return this.categoryService.getProductDetail(theProduct);
  }

  ngOnInit() {

  }

}
