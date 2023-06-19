import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picklist } from '../models/picklist';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PicklistService {
  port = "9990"
   URl="http://localhost:"+this.port+"/api/picklist"
  constructor( private http : HttpClient) { }

  getAllPicklist() : any {
    return this.http.get(this.URl + "/all")
  } 

  getPicklistById(id : number ) : Observable<Picklist> {
    return this.http.get<Picklist>(this.URl + "/" + id)
  }


}
