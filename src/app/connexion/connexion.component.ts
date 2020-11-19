import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApService } from '../service/ap.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],

})


export class ConnexionComponent implements OnInit {
  title : string = "Connexion";
  username : string = "";
  password : string = "";
  goodPass : string = "azerty";
  goodUser : string = "Kez";
  isHidden : Boolean = false;
  visiteur : any;
  lblMessage : string;
  constructor( private router : Router, private apiService: ApService) { }


  ngOnInit(): void {
  }
  onSubmit() {
    this.apiService.connexion(this.username,this.password)
    .subscribe(
      (data)=>{
          console.log(data);
          this.visiteur = data;
          this.apiService.visiteur = data;
          this.router.navigate(['/']);
 }
,(error)=>{
  this.isHidden = false;
  this.lblMessage = "erreur de connexion";}
 );
 };

    }


