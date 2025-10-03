const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql2/promise')

var app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const db={
    host:'localhost',
    user:'root',
    password:'',
    database:'Pelis'
}

app.post('/crear', async (req,res)=>{
    const {Nom,Tel,Cor,Pas}=req.body
    try{
        conect= await mysql.createConnection(db)
        await conect.execute('INSERT INTO Usuarios(Nombre,Telefono,Correo,Contrasena) VALUES(?,?,?,?)',[Nom,Tel,Cor,Pas])
        return res.status(201).json({
            success:true,
            message:'Usuario Creado'
        })
    }
    catch(err){
        console.error(err)
    }
    finally{
        if(conect)await conect.end()
    }
})

//Login
app.post('/login', async (req, res)=>{
    const {Correo, Contrasena} = req.body
    let conect
    try{
        conect = await mysql.createConnection(db)
        const [rows] = await conect.execute(
             'SELECT * FROM Usuarios WHERE Correo = ? AND Contrasena = ?',
             [Correo, Contrasena]
        )

        if(rows.length === 0){
            return res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos'})
        }

       const usuario = rows[0]
    return res.json({
      mensaje: 'Inicio de sesión exitoso',
      usuario: {
        id: usuario.id,
        nombre: usuario.Nombre,
        correo: usuario.Correo
      }
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json('Error al iniciar sesión')
  } finally {
    if (conect) await conect.end()
  }
})

app.listen(8000, () => {
  console.log('API corriendo en http://localhost:8000')
})
