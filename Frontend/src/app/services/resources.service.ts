import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidDeclaration } from 'src/types/covid-declaration';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) {}

  getAllCovidDeclarations(): Observable<CovidDeclaration[]> {
    return this.http.get<CovidDeclaration[]>('http://localhost:8080/api/covidDeclarations');
  }
}
