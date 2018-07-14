import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SurveyPageRoutingModule } from './survey-page-routing.module';
import { SurveyPageComponent } from './survey-page.component';
import { MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { SurveyDetailsModule } from '@app/shared/components/survey-details/survey-details.module';
import { SurveyAddressModule } from '@app/shared/components/survey-address/survey-address.module';

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
  ],
  declarations: [SurveyPageComponent]
})
export class SurveyPageModule { }
