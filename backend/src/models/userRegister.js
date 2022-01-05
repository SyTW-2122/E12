const { Schema, model} = require('mongoose');

const userRegisterSchema = new Schema({
  name: String,
  email: String, 
  password: String
}, {
  timestamps: true
});

module.exports = model('UserRegister', userRegisterSchema)