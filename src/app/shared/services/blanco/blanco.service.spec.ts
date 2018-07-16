import { TestBed, getTestBed } from '@angular/core/testing';

import { BlancoService, ENDPOINT } from './blanco.service';
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

      const call = service.listCustomer(year);

      expect(call.subscribe).toBeTruthy();

    });

    it('should load data', () => {

      const seasonMock = [
        { foo: 'bar' }
      ];

      service.listCustomer().subscribe(season => {
        expect(season).toBeTruthy(2);
      });

      const req = httpMock.expectOne(ENDPOINT);

      expect(req.request.method).toBe('GET');

      req.flush(seasonMock);

    });

    it('should throw a custom error if a wrong year is given`', () => {
      service.listCustomer()
        .subscribe(() => { }, err => {
          expect(err).toBe(`BlancoService Error:: Need to improve error log`);
        });

      httpMock.expectNone('http://fakepoint.com');
    });

  });

});
