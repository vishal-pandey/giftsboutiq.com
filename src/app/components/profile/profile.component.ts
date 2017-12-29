import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user={};
  orders = [];
  constructor(private userService:UserService) { 
    this.userService.getOrders().subscribe((result)=>{
      this.orders = result;
      // console.log(JSON.stringify(this.orders));
    });
  }

  ngOnInit() {

  	if (this.userService.isLoggedIn()) {
  		this.userService.getUser().subscribe((result)=>{
	  		// console.log(result);
	  		this.user = result;
	  	});
  	}
  }

}
