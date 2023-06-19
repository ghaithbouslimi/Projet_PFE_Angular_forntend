export class Picklist {
    
     id_PickList : number = 0 ;
     Num_pickList  : number = 0 ;
     Magasin : String ='' ;
     dateCreation : Date ;
     DateMaj : Date ;
     Datelivraison : Date;
     dateServi  :Date ;
     TypePicklist: String = '' ;
     nb_US_servi : number = 0 ;
     nb_Us_Recept : number = 0 ;
     Hostname : String = '' ;
     Observation : String = '' ;
     id_CauseServi : number = 0;
     printedServi : String = '';
     demande_annulation : String = '' ;
     demande_supp_par: String = '' ;
     approb_supp_par : String = '';
     date_demande_suppression : Date;
     date_approb_suppression : Date ;
     nbUSReceptCond : number = 0 ;
     setEmp : String = '';
     statut : [] = [] ; 
     ligneProduction : number = 0 

    constructor(dateCreation: Date , DateMaj : Date , Datelivraison : Date ,dateServi :Date , 
        date_demande_suppression :Date ,date_approb_suppression : Date ) {
        this.dateCreation = dateCreation;
        this.DateMaj = DateMaj ; 
        this.Datelivraison = Datelivraison ; 
        this.dateServi = dateServi
        this.date_approb_suppression = date_approb_suppression ; 
        this.date_demande_suppression = date_demande_suppression
      }
      
}
