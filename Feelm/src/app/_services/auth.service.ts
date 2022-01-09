import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // URL de la api (backend)
  private URL = "http://localhost:3000/api"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Esté método hará la petición a nuestro servidor para añadir un nuevo usuario a la BD
  register(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  login(user) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/navigate']);
  }
}
