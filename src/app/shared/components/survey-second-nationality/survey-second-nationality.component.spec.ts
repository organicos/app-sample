import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySecondNationalityComponent } from './survey-second-nationality.component';
import { MatDividerModule } from '@angular/material';

describe('SurveySecondNationalityComponent', () => {
  let component: SurveySecondNationalityComponent;
  let fixture: ComponentFixture<SurveySecondNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurveySecondNationalityComponent],
      imports: [
        MatDividerModule
      ]
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
