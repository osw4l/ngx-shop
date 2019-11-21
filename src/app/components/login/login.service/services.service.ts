import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {UserInterface} from '../../../models/user.interface';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private LOGIN_URL = `${environment.http_server}/auth/login/`;
  private LOGOUT_URL = `${environment.http_server}/auth/logout/`;
  constructor(private  http: HttpClient) {
  }
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<UserInterface>(this.LOGIN_URL, {username, password});
  }
  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }
  getToken() {
    const token_string = localStorage.getItem('accessToken');
    if (isNotNullOrUndefined(token_string)) {
      return true;

    } else {
      return null;
    }
  }
  logoutUser(): Observable<any> {
    return this.http.post(this.LOGOUT_URL, null, getHeaders());
  }
}


export function getHeaders() {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + localStorage.getItem('accessToken')
    })
  };
}
