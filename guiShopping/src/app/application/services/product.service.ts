import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../domain/external/product';
import { environment } from "../../../environments/environment";


const serverUrl = environment.serverApiUrl+'/products';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  })
};

@Injectable({ providedIn: 'root' })
@Injectable()
export class ProductService {


  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    const url = `${serverUrl}`;
    return this.http.get<Product[]>(url);
  }


  getProduct(id: number): Observable<Product> {
    const url = `${serverUrl}/${id}`;
    return this.http.get<Product>(url);
  }


  addProduct(product: Product) {
    const url = `${serverUrl}`;
    return this.http.post<Product>(url, product, httpOptions);
  }


  updateProduct(product: Product): Observable<Product> {
    const id = product.id;
    const url = `${serverUrl}/${id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }


  deleteProduct(id: number): Observable<Product> {
    const url = `${serverUrl}/${id}`;
    return this.http.delete<Product>(url, httpOptions);
  }

}
