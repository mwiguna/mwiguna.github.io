import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
	url = 'https://service.agroshopindonesia.com/todo/';

	constructor(private http:Http){}

	getTodos(){
		return this.http.get(this.url + 'getTodos').map(res => res.json())
	}

	getMyTodos(){
		return this.http.get(this.url + 'getTodos/' + this.getIdUser).map(res => res.json())
	}

	getUsers(){
		return this.http.get(this.url + 'users').map(res => res.json())
	}

	getUser(){
		return this.http.get(this.url + 'user/' + this.getIdUser()).map(res => res.json())
	}

	private getIdUser(){
		return localStorage.getItem('user_id');
	}
}