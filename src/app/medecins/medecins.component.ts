import { Component, OnInit } from '@angular/core';
import { ApService } from '../service/ap.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {
  lblMessage: string = "Erreur";
  nomEleve: string ;
  lesEleve: Array<any>;
  eleve: any;
  legende: string;
  rapportHidden: boolean = false;
  afficherMessage: boolean;
  majHidden: boolean = false;
  ajouterHidden: boolean = false;
  deleteHidden: boolean = false;
  tabHidden : boolean = false;
  confirmDeleteHidden : boolean = false;
  nom: string;
  prenom: string;
  adresse: string;
  tel: string;
  classe: string;
  constructor(private apiService: ApService, private router : Router) { }

  ngOnInit() {
    this.chargerEleve();
  }

  ajouterEleve() {
    this.apiService.AjouterUnEleve(this.nom, this.prenom, this.adresse, this.tel, this.classe).subscribe((data) => console.log(data))
  }

  chargerEleve() {
    this.apiService.chargerEleve().subscribe((data) => {
      this.lesEleve = data
      this.lesEleve.forEach(eleve => {
        eleve.classe = eleve.classe.toUpperCase()
      });
    })
    
  }

  afficherFormAjoutEleve() {
    this.ajouterHidden = !this.ajouterHidden
    this.majHidden = false
    this.tabHidden = !this.tabHidden
  }

  afficherModif(eleve: any) {
    this.eleve = eleve
    this.majHidden = !this.majHidden
    this.ajouterHidden = false
    this.tabHidden = !this.tabHidden
    
  }

  modifierEleve() {
    this.apiService.majEleve(this.eleve.ideleve, this.eleve.adresse, this.eleve.tel, this.eleve.classe).subscribe((data) =>{
      console.log(data);
      this.majHidden = false;
    })
  }

  afficherDelete(eleve : any){
    this.eleve = eleve;
    this.deleteHidden = !this.deleteHidden;
  }

  afficherConfirmDelete(){
    this.confirmDeleteHidden = !this.confirmDeleteHidden
  }
  deleteEleve() {
    this.apiService.delete(this.eleve.ideleve).subscribe((data)=> console.log(data))
    this.deleteHidden = false;
    this.afficherConfirmDelete();
    setInterval(this.afficherConfirmDelete, 2000);
    clearInterval();
    this.chargerEleve();
  }

  filtreEleve(){
    this.apiService.filtreEleve(this.nomEleve).subscribe((data) => this.lesEleve = data)
    this.lesEleve.forEach(eleve => {
      eleve.classe = eleve.classe.toUpperCase()
    });
  }

  filtreClasse(classe: any){
    console.log("paasage")
    this.apiService.filtreClasse(classe.classe).subscribe((data) => this.lesEleve = data)
    this.lesEleve.forEach(eleve => {
      eleve.classe = eleve.classe.toUpperCase()
    });
  }
}

