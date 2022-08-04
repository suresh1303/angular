import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userform } from './form/userform';


@Injectable({
  providedIn: 'root'
})
export class SubmitformService {
  _url = 'https://gorest.co.in/public-api/users/';

  constructor(private _http: HttpClient) { }

  headers = { 'Authorization': 'Bearer 9e99287bdd6384a489f60afe7af98550160f0e8cdfd45eb44dc665282be30b27' };

  enroll(user: Userform) {
    return this._http.post<any>(this._url, user, { headers: this.headers });
  }

}
