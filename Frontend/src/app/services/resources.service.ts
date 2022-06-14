import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CovidDeclaration } from 'src/types/covid-declaration';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) {}
  
  getAllCovidDeclarations(): Observable<CovidDeclaration[]> {
    return this.http.get<CovidDeclaration[]>('http://localhost:8080/api/covid-declarations')
    .pipe(map(covidDeclarations => covidDeclarations.map(declaration => CovidDeclaration.toBusinessEntity(declaration))));
  }

  saveCovidDeclaration(createCovidDeclaration: CovidDeclaration): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/create-covid-declaration', createCovidDeclaration);
  }
}
