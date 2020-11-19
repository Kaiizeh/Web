import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { AcceuilComponent } from './acceuil/acceuil.component';



const routes: Routes = [

  { path: '', component: AcceuilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'medecins', component: MedecinsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
