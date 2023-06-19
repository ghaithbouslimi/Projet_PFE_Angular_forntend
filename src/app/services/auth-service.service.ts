import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  } from 'rxjs';
import { environment } from 'src/environments/environment';



const httpOptions ={
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
}) 

export class AuthServiceService {
  port = '9990' ; 
  constructor( private http : HttpClient) { } 

  login( username :string , password : string ):Observable<any>{
    return this.http.post( 'http://localhost:'+this.port+'/api/auth/signin'  ,{
     username , 
     password
    },httpOptions)

  }
}
