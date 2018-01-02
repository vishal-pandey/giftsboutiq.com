import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CategoryService } from '../../services/category.service';
import { CookieService } from 'ngx-cookie-service';
import {MatMenuModule} from '@angular/material/menu';



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

  categories = [];
  title = this.appComponent.title; 


  navig(link){
    alert(link);
    
  }


  ngOnInit() {

    this.categoryService.getCategory()
    .subscribe((result)=>{
      this.categories = result;
    });;
  }

}
