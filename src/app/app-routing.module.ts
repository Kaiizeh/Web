import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { VisitesComponent } from './visites/visites.component';
import { AcceuilComponent } from './acceuil/acceuil.component';



const routes: Routes = [

  { path: '', component: ConnexionComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'medecins', component: MedecinsComponent },
  { path: 'visiteurs', component: VisitesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
