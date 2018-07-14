import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyDetailsComponent } from './survey-details.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SurveyDetailsComponent],
  exports: [SurveyDetailsComponent]
})
export class SurveyDetailsModule { }
