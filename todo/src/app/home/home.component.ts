import { Component, OnInit } from '@angular/core';
import { TodoService } from '../api/todo.component';
import { AuthService } from '../auth/AuthService';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../model/todo';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.css']
})

export class HomeComponent implements OnInit {
  todos: Todo[];
  user: User[];
  show = false;

  constructor(private auth: AuthService, private route: Router, private todo: TodoService) {
  	this.todo.getTodos().subscribe(todos => {
  		this.todos = todos;
  	})  
  	this.todo.getUser().subscribe(user => {
  		this.user = user;
    })
  }

  menu(){
    let menu = document.getElementById('menu').style;
    if(this.show){menu.display = 'none';  this.show = false;} 
    else         {menu.display = 'block'; this.show = true;}
  }

  logout(){
    if(this.auth.logout()) this.route.navigate(['/login']);
    else console.log("Error");
  }

  ngOnInit() {}
}
