import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Groups } from '../models/groups';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {
    port = "9990"

  URL = "http://localhost:"+this.port+"/api/group/" ;  

        constructor( private http : HttpClient) { } 
         
        getGroups() : any {
          return this.http.get(this.URL + "all")
        }
        AddGroup(group : Groups ) : Observable<Groups> {
          return this.http.post<Groups>(this.URL + "create" , group)
        }
        UpdateGroup(group : Groups) : Observable<Groups> {
          return this.http.put<Groups>(this.URL + "update/" , group)
        }
        deleteGroup(group : Groups) : Observable<Groups> {
          return this.http.delete<Groups>(this.URL + "delete/" + group.idGroup)
        }
        getById(group : Groups) : Observable<Groups> {
          return this.http.get<Groups>(this.URL + "group/" + group.idGroup)
        }
        getCount() : any {
          return this.http.get<Number>(this.URL + "countGroup")
        }
      
}
