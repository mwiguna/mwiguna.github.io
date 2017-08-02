import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/AuthService';
import { TodoService } from '../api/todo.component';
import { Todo } from '../model/todo';
import { Time } from '../model/time';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.min.css']
})

export class AddComponent implements OnInit {
  show  = false;
  todos = new Todo();
  time  = new Time();
  deadline: any = this.time.tanggal;

  constructor(private todo: TodoService, private route: Router, private auth: AuthService) { }

  menu(){
  	let menu = document.getElementById('menu').style;
    if(this.show){menu.display = 'none';  this.show = false;} 
    else         {menu.display = 'block'; this.show = true;}
  }

  addTodo(val: any) {
  	this.todo.addTodo(val).subscribe(
      data  => { this.route.navigate(['/']); },
      error => { alert(error); }
    )
  }

  logout(){
    if(this.auth.logout()) this.route.navigate(['/login']);
    else alert("Error");
  }

  ngOnInit() {}

}
