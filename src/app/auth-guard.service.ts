import { Injectable } from '@angular/core';
import { 
	CanActivate,
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
} from '@angular/router';
import { UserService } from './services/user.service';

@Injectable()
export class AuthGuardService implements CanActivate{
  constructor(
  	private userService:UserService,
  	private router:Router,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
		let url: string = state.url;

    return this.checkLogin(url);
	}
	checkLogin(url: string): boolean {
    if (this.userService.isLoggedIn()) { 

	    
	    this.router.navigate(['']);
    	return false; 
    }
    return true;
  }
}


