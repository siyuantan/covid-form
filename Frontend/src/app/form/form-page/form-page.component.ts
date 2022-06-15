import { DeclareFunctionStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateTime } from 'luxon';
import { ResourcesService } from 'src/app/services/resources.service';
import { DeclarationRecordJson } from 'src/types/covid-declaration';
import { Question } from 'src/types/question';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  questions: Question[] = [
    new Question(1, 'Name', 1),
    new Question(2, 'Temperature', 1),
    new Question(3, 'Do you have any of the following symptoms now or within the last 14 days:' 
    + ' Cough, smell/taste impairment, fever, breathing difficulties, '
    + 'body aches, headaches, fatigue, sore throat, diarrhoea, and / or runny nose (even if your symptoms are mild)?', 0),
    new Question(4, 'Have you been in contact with anyone who is suspected to have or/has been diagnosed with Covid-19 within the last 14 days?', 0),
  ];

  savedName: string = '';
  savedTemperature!: number;
  savedHasSymptoms! : boolean;
  savedHasCloseContact!: boolean;

  constructor(private resourceService: ResourcesService, private router: Router) { }

  ngOnInit(): void {

  }

  submitForm() {
    const newlyCreatedDeclaration: DeclarationRecordJson = {
      id: 0, 
      date_submitted: DateTime.now().toJSDate().toISOString(), 
      name: this.savedName,
      temperature: this.savedTemperature,
      has_symptoms: this.savedHasSymptoms,
      has_close_contact: this.savedHasCloseContact
    }
    
    this.resourceService.saveCovidDeclaration(newlyCreatedDeclaration).subscribe({
      next: (data: DeclarationRecordJson) => {
        console.log('Record saved.');
        this.router.navigate(['done']);
      },
      error: (error: any) => {
        console.error('Error on creating CovidDeclaration: ', error);
      }
    });
  }
}
