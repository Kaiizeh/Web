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

  public filtreEleve(nom: string): Observable<string[]> {
    let url: string = this.urlDomaine + "/eleves?nom="+ nom;
    let req = this.http.get<string[]>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return req;
  }

  public filtreClasse(classe: string): Observable<string[]> {
    let url: string = this.urlDomaine + "/eleves?classe="+ classe;
    let req = this.http.get<string[]>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return req;
  }
  
  public delete(id: string) {
    let url: string = this.urlDomaine + "/supprEleve?ideleve=" + id;
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
