import { Component, OnInit } from '@angular/core';
import { UspicklistService } from '../services/uspicklist.service';
import { GroupsService } from '../services/groups.service';
import { UsersService } from '../services/users.service';
import { SocketService } from '../services/socket.service';
import { TokenStorageService } from '../services/token-storage.service';
interface SideNavToggle {
  screenWidth : number 
  collapsed : boolean
}
@Component({
  selector: 'app-mangment',
  templateUrl: './mangment.component.html',
  styleUrls: ['./mangment.component.css']
})
export class MangmentComponent implements OnInit {
    
  numUs  : any ; 
  numUser : any 
  numSocket : any ; 
  EnableEtat :  any  ; 
  DesableEtat : any ; 
  Consomme : any ; 
  NonConsomme : any ; 
  Role : String [] = [] ; 
  isAdmin = false ; 
  isOp = false ; 
  constructor( private us : UspicklistService ,
     private group : GroupsService , 
     private user : UsersService ,
      private socket : SocketService,
      private  token : TokenStorageService) { }

  ngOnInit(): void { 
    this.user.getCount().subscribe((doc : Number)=>{this.numUser=doc})
    this.us.getNumPicklist().subscribe((doc : Number)=>{this.numUs=doc})
    this.us.getPickConsomme().subscribe((doc : Number)=>{this.Consomme=doc})
    this.us.getPickNonConsomme().subscribe((doc : Number)=>{this.NonConsomme=doc})
    this.socket.getCount().subscribe((doc : Number)=>{this.numSocket=doc})
    this.socket.getEnable().subscribe((doc : Number)=>{this.EnableEtat=doc})
    this.socket.getDesable().subscribe((doc : Number)=>{this.DesableEtat=doc})
   this.Role= this.token.getUser().roles
   this.Role.forEach((a:any)=>{
    if( a==='ROLE_ADMIN')
    {
      this.isAdmin=true
    } 
   })
   this.Role.forEach((a:any)=>{
    if( a==='ROLE_OPERATOR' || a==='ROLE_AGENT')
    {
      this.isOp=true
    } 
   })



  }
  isSideNavCollapsed = false ; 
  screenWidth = 0 
   
  onToogleSideNav( data : SideNavToggle) : void {
  this.screenWidth = data.screenWidth
  this.isSideNavCollapsed = data.collapsed
  }
}
