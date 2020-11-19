import { Component, OnInit } from '@angular/core';
import { ApService } from '../service/ap.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  lesEleves : any
  constructor(private apiService:ApService) { }

  ngOnInit(): void {
    this.chargerListeEleve();
  }

  chargerListeEleve(){
    this.apiService.chargerEleve().subscribe((data)=> {
      this.lesEleves = data 
      console.log(data)})
  }
}
