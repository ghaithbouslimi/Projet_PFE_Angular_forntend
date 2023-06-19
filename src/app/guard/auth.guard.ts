import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { 
  roles:String[]=[];
  isLoggedIn  = false
  constructor ( private tokenStorageService : TokenStorageService , private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      if(this.isLoggedIn){
        return true ;

      }else {return false ;}

  }
  
}
