import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyPageComponent } from '@app/pages/survey-page/survey-page.component';

const routes: Routes = [
  { path: '**', component: SurveyPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyPageRoutingModule { }
