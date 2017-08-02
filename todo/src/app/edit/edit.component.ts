import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/AuthService';
import { TodoService } from '../api/todo.component';
import { Todo } from '../model/todo';
import { Time } from '../model/time';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.min.css']
})

export class EditComponent implements OnInit {
  show  = false;
  todos = new Todo();
  time  = new Time();
  id: any;

  constructor(private todo: TodoService, private routeParam: ActivatedRoute, private route: Router, private auth: AuthService) { }

  menu(){
  	let menu = document.getElementById('menu').style;
    if(this.show){menu.display = 'none';  this.show = false;} 
    else         {menu.display = 'block'; this.show = true;}
  }

  getTodo(){
    this.todo.getTodo(this.id).subscribe(todo => {
      this.todos = todo;
    });
  }

  editTodo(val: any) {
  	this.todo.editTodo(this.id, val).subscribe(
      data  => { this.route.navigate(['/']); },
      error => { alert(error); }
    )
  }

  ngOnInit() {
  	this.routeParam.params.subscribe(params => {
		  this.id = params['id'];
	  });

    this.getTodo();
  }

  logout(){
    if(this.auth.logout()) this.route.navigate(['/login']);
    else alert("Error");
  }

}
