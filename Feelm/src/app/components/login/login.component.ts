import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { User, UserRegister } from '../../_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    ) {
      this.user = new User();
      this.userRegister = new UserRegister();
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

  get formControlsRegister() {
    return this.formRegister.controls
  }


  validateLogin() {
 
    this.authService.login(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        }, 
        err => console.log(err)
      )
  }

  validateRegister(){
    this.authService.register(this.userRegister)
      .subscribe(
        res => {
          console.log(res)
          // Nos permite crear un token de usuario en toda la sesión
          localStorage.setItem('token', res.token)
          this.router.navigate(['/home'])
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