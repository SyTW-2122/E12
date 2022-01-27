const { Router } = require('express');
const jwt = require('jsonwebtoken')

const router = Router();

const User = require('../models/user');
const userRegister = require('../models/userRegister');

// router.get('/', (req, res) => res.send('Hello world'));

// Rutas para hacer un registro o un inicio de sesión
router.post('/signup', async (req, res) => {
  // Guardamos el usuario dentro de la base de datos
  const { name, email, password } = req.body
  const user = await userRegister.findOne({email});
  if (user) return res.status(401).send("The email already exist");
  
  const newUser = new userRegister({name, email, password});
  await newUser.save();
  
  // Creamos un token para el usuario
  const token = jwt.sign({_id: newUser._id}, 'secretKey')
  // Enviamos el token al cliente
  res.status(200).json({token})
});

router.post('/signin', async (req, res) => {
  // Reccibimos el usuario a logear
  const { email, password } = req.body
  // Buscamos el email en la base de datos
  const user = await userRegister.findOne({email});
  
  if (!user) return res.status(401).send("The email doesn't exists");
  if (user.password != password) return res.status(401).send('Wrong Password');
  
  // Creamos un token para el usuario
  const token = jwt.sign({_id: user._id}, 'secretKey')
  // Enviamos el token al cliente
  res.status(200).json({token})
});

// Ruta para mostrar las películas disponibles en cartelera
router.get('/films', (req, res) => {
  res.json([
    {
      _id: '1',
      name: 'Spiderman',
      description: "Hombre araña"
    }, 
    {
      _id: '2',
      name: 'Fast and Furious',
      description: "A todo gas"
    },
  ])
});

// Ruta privada donde solo podrá entrar el usuario a ver sus tickets
router.get('/tickets', verifyToken, (req, res) => {
  res.json([
    {
      _id: '1',
      name: 'Spiderman',
      description: "Hombre araña"
    }, 
    {
      _id: '2',
      name: 'Fast and Furious',
      description: "A todo gas"
    },
  ])
});

// Obtener datos del perdin del usuario
router.get('/profile', verifyToken, (req, res) => {
  res.send(req.userId)
});

module.exports = router;

// FUnción para que solo accedan si esta logeado
function verifyToken(req, res, next) {
  // Si no tenemos el cabecera entonces no hay token y entonces no estas logeado
  if(!req.headers.authorization) return res.status(401).send('Unthorize Request');

  // Si si que la tengo la cabecera: 
  const token = req.headers.authorization.split(' ')[1]
  if (token === 'null') return res.status(401).send('Unathorize Request');

  // Obtenemos el contenido del token
  const payload = jwt.verify(token, 'secretKey')
  req.userId = payload._id
  next();
}