import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAddressComponent } from './survey-address.component';

describe('SurveyAddressComponent', () => {
  let component: SurveyAddressComponent;
  let fixture: ComponentFixture<SurveyAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAddressComponent ]
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
