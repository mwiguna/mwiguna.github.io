import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../api/todo.component';
import { User } from '../model/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.min.css']
})
export class AddComponent implements OnInit {
  show = false;
  date = new Date();
  day:any   = this.date.getDate();
  month:any = this.date.getMonth() + 1;
  year:any  = this.date.getFullYear();
  keterangan: any;
  kategori:  any;
  tanggal:   any;
  deadline:  any;
  logout:    any;

  constructor(private todo: TodoService, private route: Router) { }

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

  ngOnInit() {}

}
