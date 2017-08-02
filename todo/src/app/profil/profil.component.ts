import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/AuthService';
import { TodoService } from '../api/todo.component';
import { User } from '../model/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.min.css']
})
export class ProfilComponent implements OnInit {
  show = false;
  user = new User();

  constructor(private todo: TodoService, private route: Router, private auth: AuthService) {
  	this.todo.getUser().subscribe(user => {
      this.user = user;
    });
  }

  menu(){
  	let menu = document.getElementById('menu').style;
    if(this.show){menu.display = 'none';  this.show = false;} 
    else         {menu.display = 'block'; this.show = true;}
  }

  ngOnInit() {
  }

  logout(){
    if(this.auth.logout()) this.route.navigate(['/login']);
    else alert("Error");
  }

}
