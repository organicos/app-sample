import { SurveyDetailsModule } from './survey-details.module';

describe('SurveyDetailsModule', () => {
  let surveyDetailsModule: SurveyDetailsModule;

  beforeEach(() => {
    surveyDetailsModule = new SurveyDetailsModule();
  });

  it('should create an instance', () => {
    expect(surveyDetailsModule).toBeTruthy();
  });
});
