import { SurveyQualificationInterestModule } from './survey-qualification-interest.module';

describe('SurveyQualificationInterestModule', () => {
  let surveyQualificationInterestModule: SurveyQualificationInterestModule;

  beforeEach(() => {
    surveyQualificationInterestModule = new SurveyQualificationInterestModule();
  });

  it('should create an instance', () => {
    expect(surveyQualificationInterestModule).toBeTruthy();
  });
});
