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

  cartel() {
    return this.http.get(this.URL + '/cartelera');
  }
  pelicula() {
    return this.http.get(this.URL + '/pelicula');
  }

  tickets() {
    return this.http.get(this.URL + '/perfil');
  }

  login(user) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  reservar(ticket) {
    return this.http.post<any>(this.URL + '/perfil', ticket)
  }

  deleteTickets(nameticket) {
    console.log(nameticket)
    return this.http.post<any>(this.URL + '/perfil', nameticket)
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
