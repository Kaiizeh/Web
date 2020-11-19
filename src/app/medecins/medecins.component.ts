import { Component, OnInit } from '@angular/core';
import { ApService } from '../service/ap.service';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {
  lblMessage: string = "Erreur";
  nomEleve: string;
  lesEleve: Array<any>;
  eleve: any;
  lesRapports: Array<any>;
  legende: string;
  rapportHidden: boolean = false;
  afficherMessage: boolean;
  majHidden: boolean = false;
  ajouterHidden: boolean = false;
  nom: string;
  prenom: string;
  adresse: string;
  tel: string;
  classe: string;
  constructor(private apiService: ApService) { }

  ngOnInit() {
    this.legende = "Rechercher le medecin";
    this.chargerEleve;
  }

  ajouterEleve(){
    this.apiService.AjouterUnEleve(this.nom, this.prenom, this.adresse, this.tel, this.classe).subscribe((data)=>console.log(data))
  }

  chargerEleve(){
    this.apiService.chargerEleve().subscribe((data) => this.lesEleve = data)
  }
  
  selectionner(choiceEleve){
    this.eleve = choiceEleve;
    console.log(this.eleve)
  }
  afficherFormAjoutEleve(){
    this.ajouterHidden = !this.ajouterHidden
  }
}

