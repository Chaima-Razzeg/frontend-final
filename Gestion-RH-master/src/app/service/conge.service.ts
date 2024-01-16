import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conge } from 'src/model/Conge.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CongeService {
  apiURL: string = 'http://localhost:8090/GRH/api/conge';


  constructor(private http:HttpClient) { }
  listConge(): Observable<Conge[]> {
    return this.http.get<Conge[]>(this.apiURL);
 }
 addConge(conge:Conge): Observable<Conge>{
  return this.http.post<Conge>(this.apiURL, conge);
 }
 deleteConge(id:number): Observable<Conge> {
  return this.http.delete<Conge>(this.apiURL + '/' + id);
}
getCongeById(id:number): Observable<Conge> {
  return this.http.get<Conge>(this.apiURL + '/' + id);
}
updateConge(conge : Conge): Observable<Conge> {
  return this.http.put<Conge>(this.apiURL, conge, httpOptions);

}

nbConge(conge: Conge): Observable<number> {
  const url = `${this.apiURL}/nbjours?dateDebut=${conge.dateDebut}&dateFin=${conge.dateFin}`;
  return this.http.get<number>(url);
}

}
