import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsPicklist } from '../models/us-picklist';

@Injectable({
  providedIn: 'root'
})
export class UspicklistService {
  port = "9990" ; 

  URl = "http://localhost:"+this.port+"/api/uspicklist/find/"
  URL = "http://localhost:"+this.port+"/api/uspicklist/"
  constructor( private http : HttpClient) { } 

  getUS( picklist : any , ligne : any) : Observable<UsPicklist>{
    return this.http.get<UsPicklist>(this.URl + picklist  +"/"+ ligne)
  }

  postUs(doc : any): any {
   return this.http.post<any>("http://localhost:"+this.port+"/api/uspicklist/upload",doc)
  }
  getAllUs() : any {
    return this.http.get(this.URL + "all")
  }
  getPickConsomme(): any{
    return this.http.get<Number>(this.URL +"findStatu/10")
  }
  getPickNonConsomme(): any{
    return this.http.get<Number>(this.URL +"findStatu/11")
  }
  getNumPicklist () : any {
    return this.http.get<Number>(this.URL + "countUS")
  }
  getListNonConsomme() : any {
    return this.http.get(this.URL + "getListNonConsomme/11")
  }
  changeStatut( doc : UsPicklist): any {
    return this.http.get(this.URL+"changeStatut/" + doc.idUsPickliste  )
  }
  
  
  
}
