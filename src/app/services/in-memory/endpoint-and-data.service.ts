import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class EndpointAndDataService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get(env.apiBaseUrl + 'api/v1/customers')
      .subscribe((customers) => {
        console.log(customers);
      });
  }

  get(id) {
    return this.http
      .get(`${env.apiBaseUrl}api/v1/customers/${id}`)
      .subscribe((customer) => {
        console.log(customer);
      });
  }

  getDoctypes() {
    return this.http.get(env.apiBaseUrl + 'api/v1/doctypes');
  }

  getCountries() {
    return this.http.get(env.apiBaseUrl + 'api/v1/countries');
  }

  getGifValues() {
    return this.http.get(env.apiBaseUrl + 'api/v1/giftvalues');
  }
}
