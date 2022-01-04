const { Router } = require('express');
const jwt = require('jsonwebtoken')

const router = Router();

const User = require('../models/user')

router.get('/', (req, res) => res.send('Hello world'));

router.post('/signup', async (req, res) => {
  // Guardamos el usuario dentro de la base de datos
  const { email, password} = req.body
  const newUser = new User({email, password});
  await newUser.save();
  
  // Creamos un token para el usuario
  const token = jwt.sign({_id: newUser._id}, 'secretKey')
  // Enviamos el token al cliente
  res.status(200).json({token})
});

module.exports = router;