import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Socket } from '../models/socket';
import { SocketService } from '../services/socket.service';
import Swal from 'sweetalert2';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {
  tableData: any[] = [];
  Role='' ; 
  Roles  : String[] = [] ; 
  isAdmin = false ; 
  isOA = false

  @ViewChild('htmlData') htmlData!: ElementRef

   socketData : any = [];
   form = { 
    id_socket : 0 ,
    port :0 ,
    etat : '' , 
    serveur : '' , 
    client : '',
   }; 

  constructor(  private socketService : SocketService , 
                private token : TokenStorageService   ) { }
  

  ngOnInit(): void { 
    this.getAllSocket()
    this.Role = this.token.getUser().roles
    this.Roles = this.token.getUser().roles ; 
    this.Roles.forEach((a:any)=>{
      if(a === 'ROLE_ADMIN')
      {
        this.isAdmin=true
      }
    })
    this.Roles.forEach((a:any)=>{
      if(a === 'ROLE_OPERATOR' || a === 'ROLE_AGENT')
      {
        this.isOA=true
      }
    })
  }
  getAllSocket(){
    this.socketService.getAllSocket().subscribe((a:any)=>{
      this.socketData=a;
      console.log(a); 
      })  
  }

  editSocket(sock : Socket) {
    this.socketService.getBYId(sock).subscribe((data: any )=>{
      this.form.id_socket=data.id_socket;
      this.form.port = data.port ; 
      this.form.serveur = data.serveur ;
      this.form.client=data.client ; 
      this.form.etat=data.etat; 

    })
  } 
  updateSocket(){
    const { id_socket , port , serveur   } = this.form ; 
    this.socketService.updateSocket(this.form).subscribe((doc:any)=>{
      this.getAllSocket()

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Data updated Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.refrech() ; 
    }); 
    
  }
  refrech()  {
    return this.socketService.getAllSocket()
  } 
  
  searchText = '';

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('SocketTable.pdf');
    });
  }
  
  changeStatus( sock : Socket){
    this.socketService.getBYId(sock).subscribe((data: any )=>{
      this.form.id_socket=data.id_socket;
      this.form.port = data.port ; 
      this.form.serveur = data.serveur ;
      this.form.client=data.client ; 
      this.form.etat=data.etat; 
      console.log(data)
    }) ;
    
    const { id_socket , etat    } = this.form ; 
    this.socketService.changeStatus(this.form).subscribe
    ((data:any)=>{
       console.log(data)
    })
    
    
  }
  
  

}
