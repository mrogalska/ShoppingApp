import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product';;


@Injectable({ providedIn: 'root' })
@Injectable()
export class ProductService {

  // pola prywatne zaczynamy od _
  private productsUrl: string;

  //  jako const
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  };

  constructor(
    private http: HttpClient
  ) {
    //  Nie możesz zdeklarować tego jako stała, a najlepiej w envorimentsach?
    this.productsUrl = 'http://localhost:80/products';
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }


  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url);
  }


  addProduct(product: Product) {
    return this.http.post<Product>(this.productsUrl, product, {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }


  updateProduct(product: Product | number): Observable<any> {
    // hmm po co to? Nie wiesz co przesyłasz?
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;
    return this.http.put<Product>(url, product, this.httpOptions);
  }


  deleteProduct(product: Product | number): Observable<Product> {
    // hmm po co to? Nie wiesz co przesyłasz?
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions);
  }

}
