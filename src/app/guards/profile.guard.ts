import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
// export class ProfileGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return true;
//   }
// }
export class ProfileGuard implements CanActivate{
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

      return true;
      
    }
    this.router.navigate(['/login']);
    return false; 
  }
}
