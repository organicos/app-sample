import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyQualificationInterestComponent } from './survey-qualification-interest.component';

describe('SurveyQualificationInterestComponent', () => {
  let component: SurveyQualificationInterestComponent;
  let fixture: ComponentFixture<SurveyQualificationInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyQualificationInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyQualificationInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
