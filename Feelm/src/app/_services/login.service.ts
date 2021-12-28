import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { BehaviorSubject, Observable } from 'rxjs';
 
@Injectable()
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
 
    constructor(private http: HttpClient){
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
      return this.currentUserSubject.value;
    }
     
    validateLogin(user: User){
      return this.http.post('/api/user/login',{
          email : user.email,
          password : user.password
      })
  }
 
}