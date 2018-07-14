import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationsPageComponent } from '@app/pages/registrations-page/registrations-page.component';

const routes: Routes = [
  { path: '', component: RegistrationsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationsPageRoutingModule { }
