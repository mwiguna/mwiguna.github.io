import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.css']
})

export class LoginComponent implements OnInit {
  user = new User();
  constructor() {}

  ngOnInit() {}
  login() {}

}
