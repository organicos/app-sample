import { Component, OnInit } from '@angular/core';
import { BlancoService } from '@app/shared/services/blanco/blanco.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrations-page',
  templateUrl: './registrations-page.component.html',
  styleUrls: ['./registrations-page.component.scss']
})
export class RegistrationsPageComponent implements OnInit {

  registrations$: Observable<any>;

  constructor(
    private blanco: BlancoService
  ) { }

  ngOnInit() {
    this.loadRegistrations();
  }

  private loadRegistrations() {
    this.registrations$ = this.blanco.listCustomer();
  }

}
