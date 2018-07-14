import { SurveyAddressModule } from './survey-address.module';

describe('SurveyAddressModule', () => {
  let surveyAddressModule: SurveyAddressModule;

  beforeEach(() => {
    surveyAddressModule = new SurveyAddressModule();
  });

  it('should create an instance', () => {
    expect(surveyAddressModule).toBeTruthy();
  });
});
