import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../api/todo.component';
import { AuthService } from '../auth/AuthService';
import { Todo } from '../model/todo';
import { User } from '../model/user';
import { FilterPipe } from '../model/todoPipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.min.css']
})

export class HomeComponent implements OnInit {
  todos: Todo[];
  user: User[];
  search: any;
  show = false;

  constructor(private auth: AuthService, private route: Router, private todo: TodoService) {
  	this.todo.getMyTodos().subscribe(todos => { this.todos = todos; })  
  	this.todo.getUser().subscribe(user => { this.user = user; })
  }

  menu(){
    let menu = document.getElementById('menu').style;
    if(this.show){menu.display = 'none';  this.show = false;} 
    else         {menu.display = 'block'; this.show = true;}
  }

  logout(){
    if(this.auth.logout()) this.route.navigate(['/login']);
    else alert("Error");
  }

  deleteTodo(id: any){
    if(confirm('Yakin ingin menghapus?')){
      this.todo.deleteTodo(id).subscribe(
        data  => { 
          document.getElementById(id).remove();
          this.todo.getMyTodos().subscribe(todos => { this.todos = todos; })  
        },
        error => { alert(error); }
      )
    }
  }

  ngOnInit() {}
}
