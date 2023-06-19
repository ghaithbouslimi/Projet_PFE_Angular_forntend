import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Role  : String[] = [] ; 
  isAdmin = false ; 
  isOp = false ; 
  constructor( private tokenStorages : TokenStorageService ) { }

  ngOnInit(): void {
    this.Role = this.tokenStorages.getUser().roles
    this.Role.forEach((a:any)=>{
      if(a === 'ROLE_ADMIN')
      {
        this.isAdmin=true
      }
    })
    this.Role.forEach((a:any)=>{
      if(a === 'ROLE_OPERATOR')
      {
        this.isOp=true
      }
    })
  }
  
  logout(){
  this.tokenStorages.signOut();
  }

}
