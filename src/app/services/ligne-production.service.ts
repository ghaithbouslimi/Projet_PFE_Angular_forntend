import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LigneProduction } from '../models/ligne-production';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LigneProductionService {
    port = "9990"
  URL = "http://localhost:"+this.port+"/api/ligne"
  constructor( private http : HttpClient) { }

  getAllLigne(): any {
    return this.http.get(this.URL + "/all")
  }

  getById( ligne : number) : Observable<LigneProduction>{
    return this.http.get<LigneProduction>(this.URL +"/"+ ligne)
  }
}
