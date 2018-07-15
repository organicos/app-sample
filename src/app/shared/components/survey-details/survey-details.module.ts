import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatRadioModule, MatSelectModule, MatDatepickerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SurveyDetailsComponent } from './survey-details.component';
import { CountryModule } from '@app/shared/services/country/country.module';

@NgModule({
  imports: [
    CommonModule,
    CountryModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  declarations: [SurveyDetailsComponent],
  exports: [SurveyDetailsComponent]
})
export class SurveyDetailsModule { }
