import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
	constructor(private http: Http){}

	getHeader(){
		var headers = new Headers({'Content-type': 'application/x-www-form-urlencoded'});
		return new RequestOptions({headers: headers});
	}

	login(username: string, password: string){
		return this.http.post('https://service.agroshopindonesia.com/todo/login', `username=${username}&password=${password}`, this.getHeader())
		.map((response: Response) => {
			let res = response.json();
			if(res.id){
				localStorage.setItem('user_id', res.id);
				localStorage.setItem('token',   res.token);
			} else alert(res.msg);
		});
	}

	logout(){
		localStorage.removeItem('user_id');
		localStorage.removeItem('token');
		return true;
	}

	register(name: string, username: string, email: string, password: string){
		return this.http.post('https://service.agroshopindonesia.com/todo/register', `name=${name}&username=${username}&email=${email}&password=${password}`, this.getHeader())
		.map((response: Response) => { console.log(response.json()) });
	}
}