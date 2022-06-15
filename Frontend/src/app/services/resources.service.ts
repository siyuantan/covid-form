import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CovidDeclaration, DeclarationRecordJson } from 'src/types/covid-declaration';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) {}
  
  getAllCovidDeclarations(): Observable<CovidDeclaration[]> {
    return this.http.get<CovidDeclaration[]>('http://coviddeclarationformspringbootapp-env.eba-jaibsmyi.ap-southeast-1.elasticbeanstalk.com/api/covid-declarations')
    .pipe(map(covidDeclarations => covidDeclarations.map(declaration => CovidDeclaration.toBusinessEntity(declaration))));
  }

  saveCovidDeclaration(createCovidDeclaration: DeclarationRecordJson): Observable<any> {
    return this.http.post<any>('http://coviddeclarationformspringbootapp-env.eba-jaibsmyi.ap-southeast-1.elasticbeanstalk.com/api/create-covid-declaration', createCovidDeclaration);
  }
}
