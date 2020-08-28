import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

const serverUrl = environment.serverApiUrl;

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(private http: HttpClient, private router: Router) {
    }

    public login(username: string, password: string) {
        const headers = new HttpHeaders({
            Authorization: 'Basic ' + btoa(username + ":" + password)
        });
        return this.http.get(`${serverUrl}/login`, {headers, responseType: 'text' as 'json'});
    }

    public getUsers() {
        let username = "tom";
        let password = "test";
        const headers = new HttpHeaders({
            Authorization: 'Basic ' + btoa(username + ":" + password),
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization'        
        });
        return this.http.get(`${serverUrl}/users`, {headers});
    }

}