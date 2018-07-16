import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CountryService } from '@app/shared/services/country/country.service';
import { NaturalPerson } from '@app/shared/models/customer.model';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent {

  countries = [];

  @Input() person: NaturalPerson = new NaturalPerson();

  @Output() saved = new EventEmitter<any>();

  constructor(
    private countryService: CountryService
  ) {
    this.countries = this.countryService.countries;
  }

  save() {

    this.saved.emit(this.person);

  }

}
