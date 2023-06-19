import { Component, OnInit } from '@angular/core';
import { UspicklistService } from '../services/uspicklist.service';
import { SocketService } from '../services/socket.service';
import { UsPicklist } from '../models/us-picklist';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  ListUS : any 
  SocketList : any ; 
  constructor(private us : UspicklistService , 
    private Socket : SocketService , 
  
     ) { }

  ngOnInit(): void {
    this.getAllUs();
    this.Socket.getListEnable().subscribe((doc:any)=>{this.SocketList=doc})
  }

  getAllUs(){
    this.us.getAllUs().subscribe((doc:any)=>{this.ListUS=doc ; console.log(doc)})

  }

  Validated(p : UsPicklist) { 
    this.us.changeStatut(p).subscribe((doc:any)=>{
      this.getAllUs();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'The Picklist Num :' + p.idUsPickliste +' on the Ligne :'
        + p.ligneProduction?.id_LigneProduction + 'is successfully processed ',
        showConfirmButton: false,
        timer: 5000
      })
    })
    
  }
  NotValidated(p:UsPicklist){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'The Picklist Num :' + p.idUsPickliste +' on the Ligne :'
      + p.ligneProduction?.id_LigneProduction + 'is Not processed ',
      showConfirmButton: false,
      timer: 5000
    })
  }

}
