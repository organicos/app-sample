import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries = [
    { id: 1, label: 'Brazil', value: 'br' },
    { id: 2, label: 'Netherlands', value: 'nl' },
  ];

  constructor() { }

}
