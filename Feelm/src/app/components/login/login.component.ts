import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';
import { first } from 'rxjs';
import { useAnimation } from '@angular/animations';
import { LoginService } from '../../_services/login.service';
import { User, UserRegister } from '../../_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})

export class LoginComponent implements OnInit {

  public user : User;
  public formLogin: FormGroup;

  public userRegister: UserRegister;
  public formRegister: FormGroup;

  error = '';
  returnUrl: string;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private loginService: LoginService,
    private authService: AuthService
    ) {
      this.user = new User();
      this.userRegister = new UserRegister();
      // redirect to home if already logged in
      if (this.loginService.currentUserValue) { 
        this.router.navigate(['/home']);
      }
    }


  ngOnInit(): void {
      this.formLogin = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })

      this.formRegister = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home'
  }

  get formControls() {
    return this.formLogin.controls
  }

  onSubmit(): string | any {
    this.submitted = true;
    this.authenticationService.login(this.formControls['email'].value, this.formControls['password'].value)
    .pipe(first())
    .subscribe(
      data => {
          let userEmail = this.authenticationService.currentUserValue.email
          // this.router.navigate(['/home']);
          this.router.navigate([this.returnUrl]);
      },
      error => {
          this.error = error
          console.log("Error")
      });
      return "test@test.es"
  }

  validateLogin() {
    if(this.user.email && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
      console.log('result is ', result);
      if(result['status'] === 'success') {
        this.router.navigate([this.returnUrl]);
      } else {
        alert('Wrong username password');
      }
    }, error => {
      console.log('error is ', error);
    });
    } else {
      alert('enter user name and password');
    }
  }

  validateRegister(){
    this.authService.register(this.userRegister)
      .subscribe(
        res => {
          console.log(this.userRegister)
          console.log(res)
        },
        err => console.log(err)
      )
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