import { Component, OnInit } from '@angular/core';
import { ApService } from '../service/ap.service';





@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.css']
})
export class VisitesComponent implements OnInit {
  nomMedecin: string;
  lesMedecins: Array<any>;
  lesRapport: Array<any>;
  rapportCourant: any;
  medecin: any;
  gestionMajRapport: boolean = false;
  gestionAjoutRapport: boolean = false;
  nomMedicament: string;
  lesMedicaments: Array<any>;
  medicamentsSelect: Array<any> = new Array();
  medicamentSelect: any;
  qtes: Array<number> = [1, 2, 3, 4, 5];
  qteSelect: number;
  date: Date;
  motifCourant: string;
  bilanCourant: string;


  constructor(private apiService: ApService) { }

  ngOnInit(): void {
  }

  modifierRapport(): void {
    this.gestionMajRapport = !this.gestionMajRapport;
  }
  chargerVisites(): void {
    this.apiService.chargerRapportsParDate(this.date, this.apiService.visiteur.id)
      .subscribe((data) => {
        console.log(data)
        this.lesRapport = data
      });
  }


  initNouveauRapport() {
    this.nomMedecin = "";
    // compléter initialise les champ losque l'on ajoute un nouveau rapport
  }
  ajouterRapport(): void {
    this.initNouveauRapport();
    this.gestionAjoutRapport = true;
    this.gestionMajRapport = false;
  }
  chargerMedicaments() {
    // appelle la méthode chargerMedicaments du apiService
  }
  choisirMedicament(medicament: any) {
    // permet d'afficher le médicament
  }
  ajouter(): void {
    this.medicamentsSelect.push({
      id: this.medicamentSelect.id, nom:
        this.medicamentSelect.nomCommercial, qte: this.qteSelect
    });
    this.nomMedicament = "";
  }
  retirer(): void {
    this.medicamentsSelect.pop();
  }
  enregistrer(): void {
    /*appelle la méthode enregistrerRapport du apiService
    dans le cas favorable, affiche un message de succès avec des classes CSS "ale
  rt alert-success"
    et dans le cas défavorable, affiche un message avec des classes CSS "alert al
  ert-danger"*/
  }
}
