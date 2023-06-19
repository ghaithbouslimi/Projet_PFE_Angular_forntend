import { Status } from "./Status";
import { LigneProduction } from "./ligne-production";

export class UsPicklist {
      idUsPickliste : number = 0 ;
      numUS : number  = 0;
      codeproduit : number = 0  ;
      quantite : number = 0  ;
      source : String ='';
      hostname : String = '';
       majpar : String ='';
      datecreation : Date ; 
      idstatus : Status | undefined ;
      ligneProduction : LigneProduction  | undefined ; 

      constructor ( datecreation : Date) {
      this.datecreation  = datecreation
      }
}
