import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id: number;
  name: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.birthday)
  }

  ngOnInit(): void {
  }

}
