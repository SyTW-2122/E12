const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
  name: String, 
  sala: String,
  hora: String, 
  dia: String
}, {
  timestamps: true
});

module.exports = model('Tickets', ticketSchema)