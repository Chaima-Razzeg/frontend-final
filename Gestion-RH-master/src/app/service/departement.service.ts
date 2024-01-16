import { Departement } from './../../model/Departement.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  apiURL: string = 'http://localhost:8090/GRH/api/departement';
  apiURL1: string = 'http://localhost:8090/GRH/api/departement/count';




  constructor(private http : HttpClient) { }
  listDepartement(): Observable<Departement[]>{
    return this.http.get<Departement[]>(this.apiURL);
  }
  addDepartement(departement : Departement): Observable<Departement>{
    return this.http.post<Departement>(this.apiURL,departement);
  }
  deleteDepartement(id:number): Observable<Departement>{
    return this.http.delete<Departement>(this.apiURL + '/' + id);
}
updateDepartement(departement:Departement): Observable<Departement> {
  return this.http.put<Departement>(this.apiURL, departement, httpOptions);

}
getDepartementById(id:number): Observable<Departement> {
  return this.http.get<Departement>(this.apiURL + '/' + id);
}
rechercherParNomDep(nomDep: string):Observable< Departement[]> {
  const url = `${this.apiURL}/nomDep/${nomDep}`;
  return this.http.get<Departement[]>(url);
  }
  countDepartement(): Observable<number> {
    return this.http.get<number>(this.apiURL1);
  }



}
