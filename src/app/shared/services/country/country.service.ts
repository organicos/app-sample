import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries = [
    { id: 1, label: 'Brazil', value: 'br' },
    { id: 2, label: 'Netherlands', value: 'nl' },
  ];

  public cities = {
    br: [
      { id: 1, label: 'Florianópolis', value: 'fpolis' },
      { id: 2, label: 'São Paulo', value: 'sp' },
    ],
    nl: [
      { id: 1, label: 'Amsterdam', value: 'amsterdam' },
      { id: 2, label: 'Roterdam', value: 'roterdam' },
    ],
  };

  constructor() { }

}
