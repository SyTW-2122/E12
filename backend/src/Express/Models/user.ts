import * as mongoose from 'mongoose'
import { UserSchema } from '../Schemas'

export interface UserInterface extends mongoose.Document {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  username: string;
  password: string;
  // tickets: Ticket[];
}

export const UserModel = mongoose.model<UserInterface>('Menu', UserSchema)