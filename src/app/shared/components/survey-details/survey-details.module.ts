import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyDetailsComponent } from './survey-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatRadioModule, MatSelectModule, MatDatepickerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
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
