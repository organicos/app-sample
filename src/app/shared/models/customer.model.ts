export class Address {
  address: string;
  apartmentFloor: string;
  city: string;
  country: string;
  line1: string;
  line2: string;
  number: string;
  postalCode: string;
}

export interface Document {
  city: string;
}

export class NaturalPerson {
  address = new Address();
  countryOfBirth: string;
  dateOfBirth: Date;
  documentNumber: string;
  email: string;
  expiryDate: Date;
  firstName: string;
  initials: string;
  lastName: string;
  nationality: string;
  personalNumber: string;
  phone: string;
  placeOfBirth: string;
  sex: string;
  socialSecurityNumber: string;
}

export class Party {
  documents: Document[];
  legalEntity: string;
  naturalPerson = new NaturalPerson();
  parties: Party[];
}

export class Customer {
  documents: Document[];
  parties: Party[] = [
    new Party()
  ];
  type: 'INDIVIDUAL';
}
