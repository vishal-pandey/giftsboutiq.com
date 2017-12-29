import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})

export class ViewcartComponent implements OnInit {

  constructor(
  	private cartService:CartService,
  	private categoryService:CategoryService,
  ) { }

  
  products = this.cartService.products;

  getProductDetail(pr){
    return this.categoryService.getProductDetail(pr);
  }
  getTotal(){
    let total=0;
    for(let pr of this.products){
      let price = parseInt(this.getProductDetail(pr.id).price);
      let qty = parseInt(pr.val);
      total += (price*qty);
    }
    return total;
  }

  

  ngOnInit() {
  }
}
