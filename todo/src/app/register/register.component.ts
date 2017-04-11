import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['../../assets/style.css', '../../assets/rewidify.css']
})

export class RegisterComponent implements OnInit {
  user = new User();
  constructor() {}

  ngOnInit() {}
  register() {}

}
