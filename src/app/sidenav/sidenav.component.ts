import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { TokenStorageService } from '../services/token-storage.service';


interface SideNavToggle {
  screenWidth : number 
  collapsed : boolean
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit { 
   Role  : string[]= []
  constructor ( private token : TokenStorageService) {}
  ngOnInit(): void { 
    if(this.token.getToken())
    {}
    this.token.getUser().roles = this.Role
  }
   collapsed = true
   navData = navbarData 
   screenWidth = 0 
   @Output() onToggleSideNav : EventEmitter<SideNavToggle>  = new EventEmitter() ; 
  
  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})
  }

  closeSidenav (): void {
    this.collapsed=false
    this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})

  } 

  logout() {
    this.token.signOut() ; 
  }
   
  

}
