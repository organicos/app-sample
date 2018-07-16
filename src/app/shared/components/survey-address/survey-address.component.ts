import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CountryService } from '@app/shared/services/country/country.service';
import { Address } from '@app/shared/models/customer.model';

@Component({
  selector: 'app-survey-address',
  templateUrl: './survey-address.component.html',
  styleUrls: ['./survey-address.component.scss']
})
export class SurveyAddressComponent {

  @Input() address = new Address();

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
