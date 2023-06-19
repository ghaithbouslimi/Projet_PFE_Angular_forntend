import { Component, OnInit } from '@angular/core';
import { LigneProductionService } from '../services/ligne-production.service';
import { PicklistService } from '../services/picklist.service';
import { UspicklistService } from '../services/uspicklist.service';
import Swal from 'sweetalert2';
import { TokenStorageService } from '../services/token-storage.service';
import { LigneProduction } from '../models/ligne-production';
import { UsPicklist } from '../models/us-picklist';
import { Picklist } from '../models/picklist';


@Component({
  selector: 'app-suivi-us',
  templateUrl: './suivi-us.component.html',
  styleUrls: ['./suivi-us.component.css']
})
export class SuiviUSComponent implements OnInit {
  condition1 =  false
  ligneList:any ; 
  ListPicklist: any ; 
  SelectedLigne : LigneProduction | undefined  ; 
  SelectedPicklist  : Picklist | undefined ; 
  USList : any = [] ; 
  ShowGreen = false ; 
  ShowRed = true ; 
  isAdmin=false; 
  isOA = false;
  Role1  : String[] = [] ; 

  constructor( private servicePicklist  : PicklistService ,
               private serviceLigne : LigneProductionService , 
               private us :  UspicklistService , 
               private token : TokenStorageService) { }

  ngOnInit(): void {
    this.serviceLigne.getAllLigne().subscribe((data:  any) =>{this.ligneList=data ; console.log(data) })
    this.servicePicklist.getAllPicklist().subscribe((data:any)=>{this.ListPicklist=data ; console.log()})
    this.Role1 = this.token.getUser().roles ; 
    this.Role1.forEach((a:any)=>{
      if(a === 'ROLE_ADMIN')
      {
        this.isAdmin=true
      }
    })
    this.Role1.forEach((a:any)=>{
      if(a === 'ROLE_OPERATOR' || a === 'ROLE_AGENT')
      {
        this.isOA=true
      }
    })
  }
  


  onSubmit() {
   console.log(this.SelectedLigne)
   console.log(this.SelectedPicklist)
    this.us.getUS(this.SelectedLigne?.id_LigneProduction , this.SelectedPicklist?.id_PickList).subscribe((data: any )=>{this.USList=data
    console.log(data)
    if(this.USList.length == 0){
      this.condition1 = false

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'NOT AVAILABLE  !',
        
      })
    }else {
      this.condition1 = true

    }
    })
    
  } 
}


