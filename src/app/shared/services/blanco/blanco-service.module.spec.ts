import { BlancoServiceModule } from './blanco-service.module';

describe('BlancoServiceModule', () => {
  let blancoServiceModule: BlancoServiceModule;

  beforeEach(() => {
    blancoServiceModule = new BlancoServiceModule();
  });

  it('should create an instance', () => {
    expect(blancoServiceModule).toBeTruthy();
  });
});
