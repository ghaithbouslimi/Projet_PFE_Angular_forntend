import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate { 
  roles: string[] = [];
  isAdmin = false
  constructor ( private tokenStorageService : TokenStorageService) {}
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.tokenStorageService.getUser().roles = this.roles
    this.roles.forEach((a:any)=>{
      if (a==='ROLE_ADMIN') {
        this.isAdmin = true 
      }
    })
    return this.isAdmin;
  }
  
}
