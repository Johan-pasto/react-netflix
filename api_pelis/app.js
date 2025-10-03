// ======================
//  IMPORTS
// ======================
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ======================
//  CONEXIÓN A MONGO
// ======================
mongoose.connect('mongodb+srv://JohanPasto:Johan2006@cluster0.u59wgwp.mongodb.net/basepeli', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch(err => console.error("❌ Error al conectar a Mongo:", err))

// ======================
//  MODELOS
// ======================
const PeliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  imagen: { type: String, required: true }
})

const UsuarioSchema = new mongoose.Schema({
  Nombre: { type: String, required: true },
  Telefono: { type: String, required: true },
  Correo: { type: String, unique: true, required: true },
  Contrasena: { type: String, required: true }
})

const Pelicula = mongoose.model("Pelicula", PeliculaSchema)
const Usuario = mongoose.model("Usuario", UsuarioSchema)

// ======================
//  RUTAS USUARIOS
// ======================

// Registro
app.post('/crear', async (req,res)=>{
  const { Nom, Tel, Cor, Pas } = req.body
  try {
    const nuevoUsuario = new Usuario({
      Nombre: Nom,
      Telefono: Tel,
      Correo: Cor,
      Contrasena: Pas
    })
    await nuevoUsuario.save()
    return res.status(201).json({
      success: true,
      message: '✅ Usuario creado con éxito'
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      success: false,
      message: '❌ Error al crear usuario',
      error: err.message
    })
  }
})

// Login
app.post('/login', async (req, res)=>{
  const { Correo, Contrasena } = req.body
  try {
    const usuario = await Usuario.findOne({ Correo, Contrasena })
    if (!usuario) {
      return res.status(401).json({ success: false, message: '❌ Correo o contraseña incorrectos' })
    }
    return res.json({
      mensaje: '✅ Inicio de sesión exitoso',
      usuario: {
        id: usuario._id,
        nombre: usuario.Nombre,
        correo: usuario.Correo
      }
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json('❌ Error al iniciar sesión')
  }
})

// ======================
//  RUTAS PELICULAS
// ======================
app.get('/peliculas', async (req, res) => {
  try {
    const pelis = await Pelicula.find()
    res.json(pelis)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Error al obtener películas" })
  }
})

app.post('/peliculas', async (req, res) => {
  const { titulo, imagen } = req.body
  try {
    const nueva = new Pelicula({ titulo, imagen })
    await nueva.save()
    res.status(201).json({ success: true, message: "✅ Película agregada con éxito" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: "❌ Error al agregar película" })
  }
})

// ======================
//  SERVER
// ======================
app.listen(8000, () => {
  console.log("🚀 API corriendo en http://localhost:8000")
})
