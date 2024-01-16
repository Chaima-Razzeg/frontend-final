import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from 'src/model/Departement.model';
import { Poste } from 'src/model/Poste.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class PosteService {
  apiURL: string = 'http://localhost:8090/GRH/api/poste';
  apiURL1: string = 'http://localhost:8090/GRH/api/departement';
  apiURL2: string = 'http://localhost:8090/GRH/api/poste/count';




  constructor(private http : HttpClient) {}
  listPoste(): Observable<Poste[]>{
    return this.http.get<Poste[]>(this.apiURL);
 }
 addPoste(poste : Poste): Observable<Poste>{
  return this.http.post<Poste>(this.apiURL,poste);
}
deletePoste(id:number): Observable<Poste>{
  return this.http.delete<Poste>(this.apiURL + '/' + id);
}

updatePoste(poste:Poste): Observable<Poste> {
  return this.http.put<Poste>(this.apiURL, poste, httpOptions);

}
getPosteById(id:number): Observable<Poste> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Poste>(url);
}
listDepartement(): Observable<Departement[]>{
  return this.http.get<Departement[]>(this.apiURL1);
}


rechercherParNomPos(nomPos: string):Observable< Poste[]> {
  const url = `${this.apiURL}/nomPos/${nomPos}`;
  return this.http.get<Poste[]>(url);
  }
countPoste(): Observable<number> {
    return this.http.get<number>(this.apiURL2);
  }



}