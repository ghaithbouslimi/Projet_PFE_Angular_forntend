export class LigneProduction {
      id_LigneProduction : number = 0  ;
      codeLigneProduction : number = 0  ;
      id_UniteFabrication: number = 0  ;
      etat : String ='' ;
      observation: String =''  ;
      RobotTraitement: String =''  ;
      dateCreation : Date ;
      dateMaj : Date;
      hostname : String =''  ;
      boucle : String ='' ;
      forced : String ='' ;
      ProduitForced: String =''  ;

     constructor ( dateCreation : Date , dateMaj:Date) {
      this.dateCreation = dateCreation ; 
      this.dateMaj = dateMaj;
     }
}
