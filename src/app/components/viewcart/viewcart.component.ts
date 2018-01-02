import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CategoryService } from '../../services/category.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})

export class ViewcartComponent implements OnInit {

  products = this.cartService.products;
  // theProduct = {"pid":"","cid":"","name":"","price":"","sprice":"","description":"","qty":""};
  prArray = [];

  constructor(
    private cartService:CartService,
    private categoryService:CategoryService,
  ) { 
      for(let pr of this.products){
        this.categoryService.getProductDetail(pr.id).subscribe((result)=>{
          // this.theProduct = result;
          this.prArray.push(result);
          // console.log(result);
        });    
      }
  }

  
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

  ngOnInit() {
  }
}
