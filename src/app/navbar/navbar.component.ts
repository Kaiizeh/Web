import { Component, OnInit } from '@angular/core';
import { ApService } from '../service/ap.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  visiteur : any;
  constructor(private apiService : ApService) { }

  ngOnInit(): void {
    this.visiteur = this.apiService.visiteur;
  }


}
