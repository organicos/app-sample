import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveySecondNationalityComponent } from './survey-second-nationality.component';
import { MatDividerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
  ],
  declarations: [SurveySecondNationalityComponent],
  exports: [SurveySecondNationalityComponent]
})
export class SurveySecondNationalityModule { }
