import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApService {
  private urlDomaine: string = "http://www.francisdemars.fr/restELEVE";
  visiteur: any;

  constructor(private http: HttpClient) { }

  connexion(loginIn: string, mdpIn: string): Observable<string[]> {
    let url: string = this.urlDomaine + "/connexion?login=" + loginIn + "&mdp=" + mdpIn;
    return this.http.get<string[]>(url).pipe(retry(1), catchError(this.handleError));

  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Erreur Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  public chargerEleve(): Observable<string[]> {
    let url: string = this.urlDomaine + "/eleves";
    let req = this.http.get<string[]>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return req;
  }

  public chargerRapports(idMedecin: Number): Observable<string[]> {
    let url: string = this.urlDomaine + "/rapports/" + idMedecin;
    let req = this.http.get<string[]>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return req;
  }

  public chargerRapportsParDate(date: Date, idVisiteur: string): Observable<string[]> {
    let url: string = this.urlDomaine + "/rapports_a_date?idVisiteur=" + idVisiteur
      + "&date=" + date;
    let req = this.http.get<string[]>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return req;
  }
  public majMedecin(id: string, adresse: string, tel: string, spe: string) {
    let url: string = this.urlDomaine + "/majmedecin?idmedecin=" + id + "&adresse=";
    url += adresse + "&tel=" + tel + "&specialite=" + spe;
    let req = this.http.get<string[]>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return req;
  }

  public majEleve(idEleve: string, adresse: string, tel: string, classe: string) {
    let url: string = this.urlDomaine + "/majeleve?ideleve=" + idEleve + "&adresse=";
    url += adresse + "&tel=" + tel +  "&classe=" + classe;
    let req = this.http.get<string[]>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return req;
  }

  public AjouterUnEleve(nom: string, prenom: string, adresse: string, tel: string, classe: string) {
    let url: string = this.urlDomaine + "/ajouterEleve?nom=" + nom + "&prenom=";
    url += prenom + "&adresse=" + adresse + "&tel=" + tel +"&classe=" + classe;
    let req = this.http.get<string[]>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return req;
  }
}
