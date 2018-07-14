import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyPageComponent } from '@app/pages/survey-page/survey-page.component';
import { SurveyDetailsComponent } from '@app/shared/components/survey-details/survey-details.component';
import { SurveyAddressComponent } from '@app/shared/components/survey-address/survey-address.component';

const routes: Routes = [
  {
    path: '', component: SurveyPageComponent, children: [

      { path: 'details', component: SurveyDetailsComponent },

      { path: 'second-nationality', component: SurveyAddressComponent },

      { path: 'address', component: SurveyAddressComponent },

      { path: 'aditional-details', component: SurveyAddressComponent },

      { path: 'qualification-interest', component: SurveyAddressComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyPageRoutingModule { }
