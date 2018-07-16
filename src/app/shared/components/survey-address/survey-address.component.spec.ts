import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAddressComponent } from './survey-address.component';
import { CountryModule } from '@app/shared/services/country/country.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDividerModule, MatInputModule, MatSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SurveyAddressComponent', () => {
  let component: SurveyAddressComponent;
  let fixture: ComponentFixture<SurveyAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyAddressComponent],
      imports: [
        CountryModule,
        FlexLayoutModule,
        FormsModule,
        MatDividerModule,
        MatInputModule,
        MatSelectModule,
        NoopAnimationsModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
