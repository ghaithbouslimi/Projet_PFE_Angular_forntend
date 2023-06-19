import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Role =''
  constructor( private role : TokenStorageService) { }

  ngOnInit(): void {
    this.Role = this.role.getUser().roles
  }

}
