import { RegistrationsPageModule } from './registrations-page.module';

describe('RegistrationsPageModule', () => {
  let registrationsPageModule: RegistrationsPageModule;

  beforeEach(() => {
    registrationsPageModule = new RegistrationsPageModule();
  });

  it('should create an instance', () => {
    expect(registrationsPageModule).toBeTruthy();
  });
});
