import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyQualificationInterestComponent } from './survey-qualification-interest.component';
import { MatDividerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
  ],
  declarations: [SurveyQualificationInterestComponent],
  exports: [SurveyQualificationInterestComponent]
})
export class SurveyQualificationInterestModule { }
