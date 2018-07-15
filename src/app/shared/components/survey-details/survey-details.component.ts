import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {

  details: any = {};

  countries = [
    { id: 1, label: 'Brazil', value: 'br' },
    { id: 2, label: 'Netherlands', value: 'nl' },
  ];

  @Output() saved = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  save() {

    this.saved.emit(this.details);

  }

}
