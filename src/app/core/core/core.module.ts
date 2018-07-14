import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlancoServiceModule } from '@services/blanco/blanco-service.module';

@NgModule({
  imports: [
    CommonModule,
    BlancoServiceModule
  ],
  exports: [
    BlancoServiceModule
  ]
})
export class CoreModule { }
