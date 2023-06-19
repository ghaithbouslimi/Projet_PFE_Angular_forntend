import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from '../models/socket';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
   port="9990"
    url = "http://localhost:"+this.port+"/api/socket/"
  constructor(private  http :  HttpClient) { }

  getAllSocket() : any {
    return this.http.get (this.url + "all")
  }

  getBYId( soc : Socket ) : Observable<Socket> {
    return this.http.get<Socket>(this.url + "socket/"  + soc.id_socket)
  }
  updateSocket ( soc : Socket  ) : Observable<Socket> {
    return this.http.put<Socket>(this.url + "update" , soc)
  }
  changeStatus ( sock : Socket) : Observable<Socket> {
    return this.http.put<Socket>(this.url + "change" , sock)
  }
  getCount() : any {
    return this.http.get<Number>(this.url + "countSocket")
  } 
  getEnable() : any {
    return this.http.get<Number>(this.url + "findStatu/enable") ; 
  }
  getDesable() : any {
    return this.http.get<Number>(this.url  + "findStatu/desable" ) ; 
  }
  getListEnable() : any {
    return this.http.get<Socket>(this.url  + "findListEnable/enable" ) ; 
  }
  launchSchedule(doc : number)  : any {
  return this.http.get<boolean>("http://localhost:9990/api/monitoring/" +doc)
  }
}
