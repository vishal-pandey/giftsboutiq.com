import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-header-a',
  templateUrl: './header-a.component.html',
  styleUrls: ['./header-a.component.css']
})
export class HeaderAComponent implements OnInit {

	category:string;
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
  }

}
