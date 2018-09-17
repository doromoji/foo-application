import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Principal } from './model/principal.model';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(private http: HttpClient) { }

	login(username, password) {
		const headers = new HttpHeaders(username ? {
			authorization: 'Basic ' + btoa(username + ':' + password),

		} : {});
		headers.append('Access-Control-Allow-Origin', '*');
		headers.keys().forEach((v, i) => console.log(v, headers.get(v)));
		return this.http.get<Principal>(
			'http://localhost:8080/user',
			{ headers: headers }
		);
	}
}
