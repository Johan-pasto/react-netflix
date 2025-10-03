import './styles/registerform.css'


export default function Registro({handleSubmit,setNombre,setTelefono,setCorreo,setContrasena}){
    return(
        <div>
            <h1> Formulario de Registro</h1>
            <div>
                <form className="registerform" onSubmit={handleSubmit}>
                    <label htmlFor='Nom'>Nombre</label>
                    <input type="text" name="Nom"  onChange={(e)=>setNombre(e.target.value)} />
                    <label htmlFor='Tel'>Telefono</label>
                    <input type="text" name="Tel"  onChange={(e)=>setTelefono(e.target.value)}/>
                    <label htmlFor='Cor'>Correo</label>
                    <input type="email" name="Cor"  onChange={(e)=>setCorreo(e.target.value)}/>
                      <label htmlFor='Pas'>Contraseña</label>
                    <input type="password" name="Pas"  onChange={(e)=>setContrasena(e.target.value)}/>
                    <button type="submit">Enviar</button>
                    
                </form>
            </div>
        </div>
    )
}