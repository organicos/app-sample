import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@app/core/core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule, MatNativeDateModule } from '@angular/material';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatNativeDateModule,
    ServiceWorkerModule.register(environment.swFile, { enabled: environment.production }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
