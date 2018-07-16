import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule, MatDividerModule } from '@angular/material';
import { SurveyAddressComponent } from './survey-address.component';
import { CountryModule } from '@app/shared/services/country/country.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    CountryModule,
    FlexLayoutModule,
    FormsModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
  ],
  declarations: [SurveyAddressComponent],
  exports: [SurveyAddressComponent]
})
export class SurveyAddressModule { }
