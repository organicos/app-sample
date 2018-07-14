import { TestBed, inject, async, getTestBed } from '@angular/core/testing';

import { BlancoService, API } from './blanco.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BlancoService', () => {
  let injector: TestBed;
  let service: BlancoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlancoService],
      imports: [
        HttpClientTestingModule,
      ]
    });

    injector = getTestBed();
    service = injector.get(BlancoService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#seasonCustomer', () => {

    const year = '2005';

    it('should return a promise', () => {

      const call = service.insertCustomer(year);

      expect(call.then).toBeTruthy();

    });

    it('should load sesions', () => {

      const endpoint = API.CHAMPION_BY_YEAR_API.replace('${year}', year);

      const seasonMock = [
        { foo: 'bar' }
      ];

      service.insertCustomer(year).then(season => {
        expect(season).toBeTruthy(2);
      });

      const req = httpMock.expectOne(endpoint);

      expect(req.request.method).toBe('GET');

      req.flush(seasonMock);

    });

    it('should throw a custom error if a wrong year is given`', () => {
      const endpoint = API.CHAMPION_BY_YEAR_API.replace('${year}', year);

      service.insertCustomer(null)
        .then(() => { }, err => {
          expect(err).toBe(`BlancoService Error:: Need to improve error log`);
        });

      httpMock.expectNone(endpoint);
    });

  });

});
