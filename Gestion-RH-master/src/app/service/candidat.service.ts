import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from 'src/model/Candidat.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  apiURL: string = 'http://localhost:8090/GRH/api/candidat';


  constructor(private http:HttpClient) { }
  listCandidat(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.apiURL);
 }
 addCandidat(candidat:Candidat): Observable<Candidat>{
  return this.http.post<Candidat>(this.apiURL, candidat);
 }
 deleteCandidat(id:number): Observable<Candidat> {
  return this.http.delete<Candidat>(this.apiURL + '/' + id);
}
getCandidatById(id:number): Observable<Candidat> {
  return this.http.get<Candidat>(this.apiURL + '/' + id);
}
updateCandidat(candidat : Candidat): Observable<Candidat> {
  return this.http.put<Candidat>(this.apiURL, candidat, httpOptions);

}
}
