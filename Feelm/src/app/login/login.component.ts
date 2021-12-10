import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() {}

  slideR() {
    slide1();
  }

  slideI() {
    slide2();
  }

  ngOnInit(): void {
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const slide1 = async () => {
  console.log("slide1")
  document.getElementById("card").className = "cardAnimation";
  await delay(2000);
  document.getElementById("registerClass").style.display = "block";
  document.getElementById("loginClass").style.display = "none";
  await delay(1200);
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
  await delay(1200);
  document.getElementById("card").className = "card";
  document.getElementById("login").style.display = "none";
  document.getElementById("regist").style.display = "block";
};