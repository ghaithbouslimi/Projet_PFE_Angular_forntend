import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  port = "9990"
  URL = "http://localhost:"+this.port+"/api/user/" ;  
  URL1 = "http://localhost:"+this.port+"/api/auth/signup" ;  



  constructor( private http : HttpClient) { } 
   
  getAllUsers() :any {
    return this.http.get(this.URL + "all") ; 
  } 
  AddUser(  user  : User ) : Observable <User>  {
    return this.http.post<User>(this.URL + "create" , user )
  }
  UpdateUser (user : User ) : Observable<User> {
    return this.http.put<User>(this.URL + user.id , user )
  }
  Update(user : User ) : Observable<User> {
    return this.http.put<User>(this.URL + "update" , user )
  }
  DeleteUser(user : User ) : Observable<User> {
    return this.http.delete<User>(this.URL + "delete/" + user.id)
  } 

  getById(user : User) : Observable<User> {
    return this.http.get<User>(this.URL + "user/" + user.id)
  }
  getCount() : any {
    return this.http.get<Number>(this.URL + "countUser")
  }
}
