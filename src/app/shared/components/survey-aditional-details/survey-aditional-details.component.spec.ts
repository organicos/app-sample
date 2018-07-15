import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAditionalDetailsComponent } from './survey-aditional-details.component';

describe('SurveyAditionalDetailsComponent', () => {
  let component: SurveyAditionalDetailsComponent;
  let fixture: ComponentFixture<SurveyAditionalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAditionalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
