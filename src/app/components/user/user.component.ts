import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	isLoggedIn:boolean;
  constructor(private userService:UserService) {
  	this.isLoggedIn = this.userService.isLoggedIn();
  	// if (this.isLoggedIn) {
  	// 	this.userService.getUser().subscribe((result)=>{
	  // 		this.user = result.name;
	  // 		console.log(result);
	  // 	});
  	// }
  }


  ngOnInit() {
  }

}
