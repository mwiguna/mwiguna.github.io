import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/AuthService';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.css']
})

export class RegisterComponent implements OnInit {
  user = new User();
  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit() {}
  register(val: any) {
    console.log(val);
  	this.auth.register(this.user.name, this.user.username, this.user.email, this.user.password).subscribe(
      data  => { this.route.navigate(['/login']); },
      error => { console.log(error); }
    )
  }

}
