// Modelo de datos del usuario

import { Ticket } from "./ticket";

export class User1 {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tickets?: Ticket[];
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