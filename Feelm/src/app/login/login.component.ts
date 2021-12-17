import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
      this.formLogin = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })
  }

  get formControls() {
    return this.formLogin.controls
  }

  onSubmit(): void {
    this.authenticationService.login(this.formControls['email'].value, this.formControls['password'].value)
    .pipe(first())
    .subscribe(
      data => {
          this.router.navigate(['/home']);
      },
      error => {
          console.log("Error")
      });
  }


  slideR() {
    slide1();
  }
  slideI() {
    slide2();
  }
}



const delay = ms => new Promise(res => setTimeout(res, ms));

const slide1 = async () => {
  console.log("slide1")
  document.getElementById("card").className = "cardAnimation";
  await delay(2000);
  document.getElementById("registerClass").style.display = "block";
  document.getElementById("loginClass").style.display = "none";
  await delay(1000);
  document.getElementById("card").className = "card";
  document.getElementById("regist").style.display = "none";
  document.getElementById("login").style.display = "block";
};
const slide2 = async () => {
  console.log("slide2")
  document.getElementById("card").className = "cardAnimation";
  await delay(2000);
  document.getElementById("registerClass").style.display = "none";
  document.getElementById("loginClass").style.display = "block";
  await delay(1000);
  document.getElementById("card").className = "card";
  document.getElementById("login").style.display = "none";
  document.getElementById("regist").style.display = "block";
};