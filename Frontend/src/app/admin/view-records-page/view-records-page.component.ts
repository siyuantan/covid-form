import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import { CovidDeclaration } from 'src/types/covid-declaration';

@Component({
  selector: 'view-records-page',
  templateUrl: './view-records-page.component.html',
  styleUrls: ['./view-records-page.component.css']
})
export class ViewRecordsPageComponent implements OnInit {
  retrievedCovidDeclarations: CovidDeclaration[] = [];
  displayedColumns: string[] = ['id', 'dateSubmitted' ,'name', 'temperature', 'hasSymptoms', 'isCloseContact'];
  // https://moment.github.io/luxon/#/formatting?id=table-of-tokens
  // Localised Date | Localised 24hr Time
  dateTimeDisplayFormat = 'D T';

  constructor(private resourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.resourcesService.getAllCovidDeclarations().subscribe((covidDeclarations) => {
      this.retrievedCovidDeclarations = covidDeclarations;
    })
  }

  translateBooleanToYesNoString(booleanToBeConverted: boolean) {
    return booleanToBeConverted ? 'Yes' : 'No';
  }

}
