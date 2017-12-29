import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CategoryService } from '../../services/category.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cookieValue = "Unknown";
  constructor(
  	private categoryService:CategoryService,
  	private appComponent:AppComponent,
    private cookieService:CookieService,
  ) { }

  categories = this.categoryService.category;
  title = this.appComponent.title; 

  ngOnInit() {
  }

}
