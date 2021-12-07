// Modelo de datos del usuario

import { Ticket } from "./ticket";

export class User {
  id: number;
  name: string;
  fistName: string;
  lastName: string;
  age: number;
  email: string;
  username: string;
  private password: string;
  tickts: Ticket[];
}