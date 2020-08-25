import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

public login(username: string, password:string) {
  const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username + ":" + password)})
  return this.http.get("http://localhost:8090/", {headers, responseType: 'text' as 'json'} );
}

public getUsers() {
  let username = "magda";
  let password = "password";
  const headers = new HttpHeaders({Authorization: 'Basic' + btoa("username" + ":" + "password")});
  return this.http.get("http://localhost:8090/products", {headers} );
}

}