import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  port = "9990"
   URL="http://localhost:"+this.port+"/api/role/"


        constructor( private http : HttpClient) { }

        getRoles() : any {
          return this.http.get(this.URL + "all")
        }
        AddRole(role : Role ) : Observable<Role> {
          return this.http.post<Role>(this.URL + "create" , role)
        }
        UpdateRole(role : Role) : Observable<Role> {
          return this.http.put<Role>(this.URL + "update/" , role)
        }
        deleteRole(role : Role) : Observable<Role> {
          return this.http.delete<Role>(this.URL + "delete/" + role.id)
        }
        getById(role : Role) : Observable<Role> {
          return this.http.get<Role>(this.URL + "role/" + role.id)
        }
}
