import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL de la api (backend)
  private URL = "http://localhost:3000/api"

  constructor(
    private http: HttpClient
  ) { }

  // Esté método hará la petición a nuestro servidor para añadir un nuevo usuario a la BD
  register(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }
}
