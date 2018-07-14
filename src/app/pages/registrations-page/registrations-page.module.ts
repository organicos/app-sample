import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationsPageRoutingModule } from './registrations-page-routing.module';
import { RegistrationsPageComponent } from './registrations-page.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationsPageRoutingModule
  ],
  declarations: [RegistrationsPageComponent]
})
export class RegistrationsPageModule { }
