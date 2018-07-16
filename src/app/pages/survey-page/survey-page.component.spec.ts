import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPageComponent } from './survey-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatCardModule, MatSnackBarModule, MatNativeDateModule } from '@angular/material';
import { SurveyPageRoutingModule } from '@app/pages/survey-page/survey-page-routing.module';
import { SurveyDetailsModule } from '@app/shared/components/survey-details/survey-details.module';
import { SurveyAddressModule } from '@app/shared/components/survey-address/survey-address.module';
import { SurveySecondNationalityModule } from '@app/shared/components/survey-second-nationality/survey-second-nationality.module';
import { SurveyAditionalDetailsModule } from '@app/shared/components/survey-aditional-details/survey-aditional-details.module';
import { SurveyQualificationInterestModule } from '@app/shared/components/survey-qualification-interest/survey-qualification-interest.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SurveyPageComponent', () => {
  let component: SurveyPageComponent;
  let fixture: ComponentFixture<SurveyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyPageComponent],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatNativeDateModule,
        MatSnackBarModule,
        SurveyPageRoutingModule,
        SurveyDetailsModule,
        SurveyAddressModule,
        SurveySecondNationalityModule,
        SurveyAditionalDetailsModule,
        SurveyQualificationInterestModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
