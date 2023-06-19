import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { UspicklistService } from 'src/app/services/uspicklist.service';
import { SocketService } from 'src/app/services/socket.service';
import Swal from 'sweetalert2';
import { Socket } from 'src/app/models/socket';
import { FormGroup, FormControl } from '@angular/forms';
import { error } from 'console';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
    ListUS : any 
    ListSocketEnable : any ; 
    ListSocket : any ;
    selectedFileName: string | undefined;
    errorMessage = '';
    selectedFile: File | undefined;
     FileName : String ="" ;  
  constructor( private us : UspicklistService , private Socket : SocketService) {
    
   }

  ngOnInit(): void {
   this.us.getAllUs().subscribe((doc:any)=>{this.ListUS=doc ; console.log(doc)})
   this.Socket.getListEnable().subscribe((doc:any)=>{this.ListSocketEnable=doc; console.log(doc)})
   this.getAllSocket();
  }
   
  getAllSocket(){
    this.Socket.getAllSocket().subscribe((doc:any)=>{this.ListSocket=doc})

  }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0].name;
    this.FileName = JSON.stringify(this.selectedFile)
    console.log( this.FileName)
  }



  launchSchedule(sock : Socket){
  this.Socket.launchSchedule(sock.id_socket  ).subscribe(
  (doc : any)  =>{
    this.getAllSocket()
    if (doc == true ){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'check your mail',
        showConfirmButton: false,
        timer: 4000
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'last modif not greator than 15 min ',
        showConfirmButton: false,
        timer: 4000
      })
    } 
  }
  )}




  NotValidated(p:Socket){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'this socket has successfully completetd their processing',
      showConfirmButton: false,
      timer: 4000
    })
  }

}
