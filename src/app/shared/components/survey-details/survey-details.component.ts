import { Component, Output, EventEmitter } from '@angular/core';
import { CountryService } from '@app/shared/services/country/country.service';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent {

  details: any = {};

  countries = [];

  @Output() saved = new EventEmitter<any>();

  constructor(
    private countryService: CountryService
  ) {
    this.countries = this.countryService.countries;
  }

  save() {

    this.saved.emit(this.details);

  }

}
