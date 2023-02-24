import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  API_URL = "http://localhost/forfaits-api/"

  constructor( private http: HttpClient) { }


getForfaits(): Observable<Forfait[]> {
  return this.http.get<Forfait[]>(this. API_URL);
}


addForfait(forfait:Forfait): Observable<void> {
  forfait.dateDeDebut = formatDate(forfait.dateDeDebut, 'YYYY-MM-dd', 'en-US');
  forfait.dateDeFin = formatDate(forfait.dateDeFin, 'YYYY-MM-dd', 'en-US');
  return this.http.post<void>(this.API_URL, forfait, httpOptions);
}

updateForfait(forfait:Forfait): Observable<void> {
  forfait.dateDeDebut = formatDate(forfait.dateDeDebut, 'YYYY-MM-dd', 'en-US');
  forfait.dateDeFin = formatDate(forfait.dateDeFin, 'YYYY-MM-dd', 'en-US');
  return this.http.put<void>(`${this.API_URL}?id=${forfait.id}`, forfait, httpOptions);
}

deleteForfait(id: string): Observable<void> {
  return this.http.delete<void>(`${this.API_URL}?id=${id}`);
}

}
