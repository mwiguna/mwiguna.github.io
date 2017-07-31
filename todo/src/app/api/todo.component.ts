import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
	url = 'https://mydeveloper.cf/todo/';

	constructor(private http:Http){}

	getTodos(){
		return this.http.get(this.url + 'getTodos').map(res => res.json())
	}

	getMyTodos(){
		return this.http.get(this.url + 'getTodos/' + this.getIdUser()).map(res => res.json())
	}

	getTodo(id: any){
		return this.http.get(this.url + 'getTodo/' + id).map(res => res.json())
	}

	getUsers(){
		return this.http.get(this.url + 'users').map(res => res.json())
	}

	getUser(){
		return this.http.get(this.url + 'user/' + this.getIdUser()).map(res => res.json())
	}

	addTodo(val: any){
		return this.http.post(this.url + 'insertTodo', `id=${this.getIdUser()}&token=${this.getToken()}&keterangan=${val.keterangan}&kategori=${val.kategori}&tanggal=${val.tanggal}&deadline=${val.deadline}`, this.getHeader())
		.map(res => res.json())
	}	

	deleteTodo(id: any){
		return this.http.post(this.url + 'deleteTodo', `id=${id}&token=${this.getToken()}`, this.getHeader())
		.map(res => res.json())
	}

	private getIdUser(){
		return localStorage.getItem('user_id');
	}

	private getToken(){
		return localStorage.getItem('token');
	}

	getHeader(){
		var headers = new Headers({'Content-type': 'application/x-www-form-urlencoded'});
		return new RequestOptions({headers: headers});
	}
}