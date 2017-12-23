import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	products:number[];
  constructor(
	  	private cartService:CartService,
  	) { 
  }


  ngOnInit() {
  }

}
