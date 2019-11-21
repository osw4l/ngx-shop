import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {environment} from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsurarioService {
  usuarios = `${environment.http_server}/api/usuarios/`;
  constructor(private  http: HttpClient) { }

  listUsers(url): Observable<any> {
    return this.http.get(url, getHeaders());
  }

  register(data: any):  Observable<any> {
    return this.http.post(this.usuarios, data, getHeaders());
  }


  updateUser(id, data):  Observable<any> {
    return this.http.put(`${this.usuarios}${id}/`, data, getHeaders());
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
