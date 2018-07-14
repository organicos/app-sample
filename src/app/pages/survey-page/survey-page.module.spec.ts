import { SurveyPageModule } from './survey-page.module';

describe('SurveyPageModule', () => {
  let surveyPageModule: SurveyPageModule;

  beforeEach(() => {
    surveyPageModule = new SurveyPageModule();
  });

  it('should create an instance', () => {
    expect(surveyPageModule).toBeTruthy();
  });
});
