import * as mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String }
}, { collection : 'user' });

export const User = mongoose.model('User', userSchema);
 
