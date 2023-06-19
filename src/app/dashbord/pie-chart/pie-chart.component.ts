import { Component, OnInit } from '@angular/core';

import { SocketService } from 'src/app/services/socket.service';
import { UsersService } from 'src/app/services/users.service';
import { UspicklistService } from 'src/app/services/uspicklist.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  numUs  : any ; 
  numUser : any ;
  numSocket : any ; 
  EnableEtat :  any  ; 
  DesableEtat : any ; 
  Consomme : any ; 
  NonConsomme : any ; 
  constructor(  private us : UspicklistService ,
                private user : UsersService ,
                private socket : SocketService) { }

  ngOnInit(): void {
    this.user.getCount().subscribe((doc : Number)=>{this.numUser=doc})
    this.us.getNumPicklist().subscribe((doc : Number)=>{this.numUs=doc})
    this.us.getPickConsomme().subscribe((doc : Number)=>{this.Consomme=doc})
    this.us.getPickNonConsomme().subscribe((doc : Number)=>{this.NonConsomme=doc})
    this.socket.getCount().subscribe((doc : Number)=>{this.numSocket=doc})
    this.socket.getEnable().subscribe((doc : Number)=>{this.EnableEtat=doc})
    this.socket.getDesable().subscribe((doc : Number)=>{this.DesableEtat=doc})
     
  }
    chartOptions = {
      animationEnabled: true,
      theme: "#09dddd",
      exportEnabled: true,
      title: {
      text: "Monitoring "
      },
      subtitles: [{
      text: ""
      }],
      data: [{
      type: "pie", 
      indexLabel: "{name}: {y}%",
      dataPoints: [
        { name: "Users", y: 9 , color:'#09dddd'},
        { name: "Desable", y: 36.4 , },
        { name: "Enable", y: 3.7 , },
        { name: "Consomme", y: 30.7 ,  color:"green"},
        { name: "Non Consomme", y: 20.1 , color:'red' }
      ]
      }]
    }
  }


