import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySecondNationalityComponent } from './survey-second-nationality.component';

describe('SurveySecondNationalityComponent', () => {
  let component: SurveySecondNationalityComponent;
  let fixture: ComponentFixture<SurveySecondNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySecondNationalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySecondNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
