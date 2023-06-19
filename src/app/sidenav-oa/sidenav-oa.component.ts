import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { DataOA } from './DataOA';
interface SideNavToggle {
  screenWidth : number 
  collapsed : boolean
}
@Component({
  selector: 'app-sidenav-oa',
  templateUrl: './sidenav-oa.component.html',
  styleUrls: ['./sidenav-oa.component.css']
})
export class SidenavOAComponent   {
  navData = DataOA 

  constructor ( private token : TokenStorageService) {}
  
  
  @Output() onToggleSideNav : EventEmitter<SideNavToggle>  = new EventEmitter() ; 
   
  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})
  }

   collapsed = true
   screenWidth = 0 
  closeSidenav (): void {
    this.collapsed=false
    this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})

  } 

  logout() {
    this.token.signOut() ; 
  } 

   
}
