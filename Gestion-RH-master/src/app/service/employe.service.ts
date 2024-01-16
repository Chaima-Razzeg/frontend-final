import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from 'src/model/Employe.model';
import { Poste } from 'src/model/Poste.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  apiURL: string = 'http://localhost:8090/GRH/api/employe';
  apiURL1: string = 'http://localhost:8090/GRH/api/poste';
  apiURL2: string = 'http://localhost:8090/GRH/api/employe/count';



  constructor(private http: HttpClient) { }
  listEmploye(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiURL);
  }
  addEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.apiURL, employe);
  }
  deleteEmploye(id: number): Observable<Employe> {
    return this.http.delete<Employe>(this.apiURL + '/' + id);
  }
  updateEmploye(employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(this.apiURL, employe, httpOptions);

  }
  getEmployeById(id: number): Observable<Employe> {
    return this.http.get<Employe>(this.apiURL + '/' + id);
  }
  listPoste(): Observable<Poste[]> {
    return this.http.get<Poste[]>(this.apiURL1);
  }
  rechercherParCin(cin: number):Observable< Employe[]> {
    const url = `${this.apiURL}/cin/${cin}`;
    return this.http.get<Employe[]>(url);
    }
    countEmploye(): Observable<number> {
      return this.http.get<number>(this.apiURL2);
    }




}