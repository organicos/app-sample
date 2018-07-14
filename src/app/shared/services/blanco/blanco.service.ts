import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, distinctUntilChanged, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';

export const ENDPOINT = 'https://private-dda55-blancodeveloperassignment.apiary-mock.com/dev/registrations';

@Injectable({
  providedIn: 'root'
})
export class BlancoService {

  loading$: Observable<boolean>;

  private innerLoading$ = new BehaviorSubject(false);

  private innerLoadingMap: any = {};

  constructor(
    private http: HttpClient
  ) {
    this.subscribeToLoadingSream();
  }

  getCustomer(customer) {
    const uid = `${Date.now()}-${Math.random()}`;
    this.setLoading(uid);
    const endpoint = `${ENDPOINT}/${customer.id}`;

    return this.http.get(endpoint)
      .pipe(this.handleError())
      .pipe(tap(res => {
        this.stopLoadingAngEmitState(uid);
      }));
  }

  listCustomer() {
    const uid = `${Date.now()}-${Math.random()}`;
    this.setLoading(uid);
    const endpoint = `${ENDPOINT}`;

    return this.http.get(endpoint)
      .pipe(this.handleError())
      .pipe(tap(res => {
        this.stopLoadingAngEmitState(uid);
      }));
  }

  upsertCustomer(customer) {
    return customer.id ? this.updateCustomer(customer) : this.insertCustomer(customer);
  }

  updateCustomer(customer) {
    const uid = `${Date.now()}-${Math.random()}`;
    this.setLoading(uid);
    const endpoint = `${ENDPOINT}`;

    return this.http.put(endpoint, customer)
      .pipe(this.handleError())
      .pipe(tap(res => {
        this.stopLoadingAngEmitState(uid);
      }));
  }

  insertCustomer(customer) {
    const uid = `${Date.now()}-${Math.random()}`;
    this.setLoading(uid);
    const endpoint = `${ENDPOINT}`;

    return this.http.post(endpoint, customer)
      .pipe(this.handleError())
      .pipe(tap(res => {
        this.stopLoadingAngEmitState(uid);
      }));
  }

  private handleError = () => {
    return catchError(err => {
      return throwError('BlancoService Error:: Need to improve error log');
    });
  }
  private setLoading(uid, state = true) {
    this.innerLoadingMap[uid] = state;
  }

  private stopLoadingAngEmitState(uid) {
    this.setLoading(uid, false);
    this.emitState();
  }

  private emitState() {
    const state = Object.keys(this.innerLoadingMap).reduce((previousValue, uid) => {
      const status = this.innerLoadingMap[uid];
      return status || previousValue;
    }, false);
    this.innerLoading$.next(state);
  }

  private subscribeToLoadingSream() {
    this.loading$ = this.innerLoading$
      .pipe(
        distinctUntilChanged()
      );
  }
}
