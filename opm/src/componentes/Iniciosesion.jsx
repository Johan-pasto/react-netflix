export default function Iniciosesion({ handleSubmit, Correo, Contrasena, setCorreo, setContrasena }) {
    console.log("Props recibidos:", setCorreo, setContrasena)
    return (
        <div>
            <h1>Inicio de sesión</h1>
            <form className="registerform" onSubmit={handleSubmit}>
                <label htmlFor="correo">Correo</label>
                <input 
                    type="email" 
                    id="correo"
                    value={Correo}
                    onChange={(e) => setCorreo(e.target.value)} 
                />

                <label htmlFor="contrasena">Contraseña</label>
                <input 
                    type="password" 
                    id="contrasena"
                    value={Contrasena}
                    onChange={(e) => setContrasena(e.target.value)} 
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
