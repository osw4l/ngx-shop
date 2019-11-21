import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  ventas_url = `${environment.http_server}/api/ventas/`;

  constructor(private  http: HttpClient) {
  }

  listVentas(url): Observable<any> {
    return this.http.get(url, getHeaders());
  }

  enviarVenta(data): Observable<any> {
    return this.http.post(this.ventas_url, data, getHeaders());
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
