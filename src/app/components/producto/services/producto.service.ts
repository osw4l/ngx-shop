import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {environment} from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos_url = `${environment.http_server}/api/productos/`;
  private productos = `${environment.http_server}/api/productos/`;
  private create_producto = `${environment.http_server}/api/productos/`;

  constructor(private  http: HttpClient) { }

  listProducts(url): Observable<any> {
    return this.http.get(url, getHeaders());
  }

  searchProducto(search): Observable<any> {
    return this.http.get(`${this.productos_url}?search=${search}`, getHeaders());
  }

  registerProduct(data: any):  Observable<any> {
    return this.http.post(this.create_producto, data, getHeaders());
  }

  updateProduct(id, data):  Observable<any> {
    return this.http.put(`${this.productos}${id}/`, data, getHeaders());
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
