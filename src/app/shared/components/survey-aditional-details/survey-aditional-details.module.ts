import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyAditionalDetailsComponent } from './survey-aditional-details.component';
import { MatDividerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
  ],
  declarations: [SurveyAditionalDetailsComponent],
  exports: [SurveyAditionalDetailsComponent]
})
export class SurveyAditionalDetailsModule { }
