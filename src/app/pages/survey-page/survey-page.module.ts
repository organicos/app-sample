import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SurveyPageRoutingModule } from './survey-page-routing.module';
import { SurveyPageComponent } from './survey-page.component';
import { MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { SurveyDetailsModule } from '@app/shared/components/survey-details/survey-details.module';
import { SurveyAddressModule } from '@app/shared/components/survey-address/survey-address.module';
import { SurveySecondNationalityModule } from '@app/shared/components/survey-second-nationality/survey-second-nationality.module';
import { SurveyAditionalDetailsModule } from '@app/shared/components/survey-aditional-details/survey-aditional-details.module';
import { SurveyQualificationInterestModule } from '@app/shared/components/survey-qualification-interest/survey-qualification-interest.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    SurveyPageRoutingModule,
    SurveyDetailsModule,
    SurveyAddressModule,
    SurveySecondNationalityModule,
    SurveyAditionalDetailsModule,
    SurveyQualificationInterestModule,
  ],
  declarations: [SurveyPageComponent]
})
export class SurveyPageModule { }
