import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/AuthService';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.css']
})

export class LoginComponent implements OnInit {
  userData: any;
  user = new User();

  constructor(private auth: AuthService, private route: Router) {
     this.userData = {
       username: "",
       password: ""
     };
  }

  login(val: any) {
  	this.auth.login(val.username, val.password).subscribe(
  		data  => { this.route.navigate(['/']); },
  		error => { console.log(error); }
  	)
  }

  ngOnInit() {}

}
