import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class CategoryService {

  constructor(
		private route: ActivatedRoute,
		private location: Location,
	) { }

  category=[
	  {id:1 , name:"Flowers"},
	  {id:2 , name:"Category 2"},
	  {id:3 , name:"Category 3"},
	  {id:4 , name:"Category 4"},
	  {id:5 , name:"Category 5"},
	  // {id:6 , name:"Category 6"},
	  // {id:7 , name:"Category 7"},
	  // {id:8 , name:"Category 8"},
	  // {id:9 , name:"Category 9"},
	  // {id:10 , name:"Category 10"}
  ];

  productList={
  	"Flowers":[
  		"product1",
  		"product2",
  		"product3",
  		"product4",
  		"product5",
  		"bukey",
  	],
  	"Category 2":[
  		"product1",
  		"product2",
  		"product3",
  		"product4",
  		"product5",
  	],
  	"Category 3":[
  		"product1",
  		"product2",
  		"product3",
  		"product4",
  		"product5",
  	],
  	"Category 4":[
  		"product1",
  		"product2",
  		"product3",
  		"product4",
  		"product5",
  	],
  	"Category 5":[
  		"product1",
  		"product2",
  		"product3",
  		"product4",
  		"product5",
  	],
  };

  productDetail={
		"product1":{
			id:1,name:"product1",price:"$1000",desc:"This is desc"
		},
		"product2":{
			id:2,name:"product2",price:"$1000",desc:"This is desc"
		},
		"product3":{
			id:3,name:"product3",price:"$1000",desc:"This is desc"
		},
		"product4":{
			id:4,name:"product4",price:"$1000",desc:"This is desc"
		},
		"product5":{
			id:5,name:"product5",price:"$1000",desc:"This is desc"
		},
		"bukey":{
			id:6,name:"bukey",price:"$100",desc:"New Description"
		},
  }

  getCategory(){
  	return this.category;
  }

  getProducts(theCategory){
  	for(var obj in this.productList ){
  		if(obj == theCategory){
  			// return obj;
  			return this.productList[obj];
  		}
  	}
  }

  getProductDetail(theProduct){
  	for(var obj in this.productDetail ){
  		if(obj == theProduct){
  			// return obj;
  			return this.productDetail[obj];
  		}
  	}
  }
}





// return this.http.get("https://jsonplaceholder.typicode.com/posts")
// .map(res => res.json());
