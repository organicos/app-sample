import { SurveyAditionalDetailsModule } from './survey-aditional-details.module';

describe('SurveyAditionalDetailsModule', () => {
  let surveyAditionalDetailsModule: SurveyAditionalDetailsModule;

  beforeEach(() => {
    surveyAditionalDetailsModule = new SurveyAditionalDetailsModule();
  });

  it('should create an instance', () => {
    expect(surveyAditionalDetailsModule).toBeTruthy();
  });
});
