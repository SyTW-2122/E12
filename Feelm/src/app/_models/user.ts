// Modelo de datos del usuario

import { Ticket } from "./ticket";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  token?: string;
  password: string;
  tickets?: Ticket[];

  constructor() {
    
  }
}