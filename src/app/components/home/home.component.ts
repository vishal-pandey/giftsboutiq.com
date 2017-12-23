import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  		private route: ActivatedRoute,
  		private location: Location,
      private categoryService:CategoryService,
  	) { }


  category=this.route.snapshot.paramMap.get('category');
  
  ngOnInit() {
  }

}
