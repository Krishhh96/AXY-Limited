import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn() {
    return this.http.get(
      'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/users'
    );
  }
  selectBoxData() {
    return this.http.get(
      'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/companies'
    );
  }
}
