import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rate, RateTable } from '../models/currencyRate'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getRates(): Observable<Rate[]> {
    return this.http
      .get<[RateTable]>(`https://api.nbp.pl/api/exchangerates/tables/A/?format=json`)
      .pipe(
        map(response =>
          response[0].rates
        )
      )
  }
}
