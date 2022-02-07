const { Schema, model } = require('mongoose')

const filmSchema = new Schema({
  name: String,
  image_route: String,
  trailer_route: String,
  synopsis: String
})

module.exports = model('Film', filmSchema);