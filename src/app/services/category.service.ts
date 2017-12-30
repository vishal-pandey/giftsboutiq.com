import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class CategoryService {

  category = [];
  constructor(
		private route: ActivatedRoute,
		private location: Location,
    private http:Http,
	) { 
  }

  getCategory(){
    return this.http.get("http://api.giftsboutiq.com/product/getcategory.php")
      .map((res)=> res.json());
  }

  getProducts(theCategory){

    return this.http.post("http://api.giftsboutiq.com/product/getprlist.php",{
      "cname": theCategory
    }).map((res)=> res.json());
      

  	// for(var obj in this.productList ){
  	// 	if(obj == theCategory){
  	// 		// return obj;
  	// 		return this.productList[obj];
  	// 	}
  	// }
  }

  getProductDetail(theProduct){

    return this.http.post("http://api.giftsboutiq.com/product/getprdetail.php",{
      "pname": theProduct
    }).map((res)=> res.json());
  	// for(var obj in this.productDetail ){
  	// 	if(obj == theProduct){
  	// 		// return obj;
  	// 		return this.productDetail[obj];
  	// 	}
  	// }
  }
}





// return this.http.get("https://jsonplaceholder.typicode.com/posts")
// .map(res => res.json());
