import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyPageComponent } from '@app/pages/survey-page/survey-page.component';
import { SurveyDetailsComponent } from '@app/shared/components/survey-details/survey-details.component';
import { SurveyAddressComponent } from '@app/shared/components/survey-address/survey-address.component';
import { SurveySecondNationalityComponent } from '@app/shared/components/survey-second-nationality/survey-second-nationality.component';
import { SurveyAditionalDetailsComponent } from '@app/shared/components/survey-aditional-details/survey-aditional-details.component';
import { SurveyQualificationInterestComponent } from '@app/shared/components/survey-qualification-interest/survey-qualification-interest.component';

const routes: Routes = [
  {
    path: '', component: SurveyPageComponent, children: [

      { path: '', component: SurveyDetailsComponent },

      { path: 'second-nationality', component: SurveySecondNationalityComponent },

      { path: 'address', component: SurveyAddressComponent },

      { path: 'aditional-details', component: SurveyAditionalDetailsComponent },

      { path: 'qualification-interest', component: SurveyQualificationInterestComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyPageRoutingModule { }
