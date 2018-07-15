import { SurveySecondNationalityModule } from './survey-second-nationality.module';

describe('SurveySecondNationalityModule', () => {
  let surveySecondNationalityModule: SurveySecondNationalityModule;

  beforeEach(() => {
    surveySecondNationalityModule = new SurveySecondNationalityModule();
  });

  it('should create an instance', () => {
    expect(surveySecondNationalityModule).toBeTruthy();
  });
});
