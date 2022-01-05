// Modelo de datos del usuario

import { Ticket } from "./ticket";

export class UserRegister {
  constructor(){
    this.name = '';
    this.email = '';
    this.password = '';
  }
  public name;
  public email;
  public password;
  token?: string;
}

export class User {
  constructor(){
      this.email = '';
      this.password = '';
  }
  public email;
  public password;
  token?: string;
}