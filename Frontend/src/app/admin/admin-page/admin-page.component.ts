import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import { CovidDeclaration } from 'src/types/covid-declaration';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  retrievedCovidDeclarations: CovidDeclaration[] = [];
  displayedColumns: string[] = ['id', 'dateSubmitted' ,'name', 'temperature', 'hasSymptoms', 'isCloseContact'];

  constructor(private resourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.resourcesService.getAllCovidDeclarations().subscribe((covidDeclarations) => {
      this.retrievedCovidDeclarations = covidDeclarations;
    })
  }

}
