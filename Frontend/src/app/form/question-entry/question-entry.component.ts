import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/types/question';

@Component({
  selector: 'app-question-entry',
  templateUrl: './question-entry.component.html',
  styleUrls: ['./question-entry.component.css']
})
export class QuestionEntryComponent implements OnInit {
  @Input() question: Question = new Question(-1, '', -1);

  constructor() { }

  ngOnInit(): void {
  }

}
