import * as mongoose from 'mongoose'
import { TicketSchema } from './ticket'

export const UserSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  name: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  age: {type: Number, required: true},
  email: {type: String, required: true, unique: true},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  tickets: TicketSchema
});