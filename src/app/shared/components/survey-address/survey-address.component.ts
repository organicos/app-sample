import { Component, Output, EventEmitter } from '@angular/core';
import { CountryService } from '@app/shared/services/country/country.service';

@Component({
  selector: 'app-survey-address',
  templateUrl: './survey-address.component.html',
  styleUrls: ['./survey-address.component.scss']
})
export class SurveyAddressComponent {

  address: any = {};

  countries = [];

  @Output() saved = new EventEmitter<any>();

  constructor(
    private countryService: CountryService
  ) {
    this.countries = this.countryService.countries;
  }

  save() {

    this.saved.emit(this.address);

  }

}
