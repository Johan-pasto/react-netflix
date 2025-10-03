import { useState } from "react"
import Iniciosesion from "../componentes/Iniciosesion"
import { useNavigate } from "react-router-dom"

export default function InicioS() {
    const [Correo, setCorreo] = useState('')
    const [Contrasena, setContrasena] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
    const data = { Correo: Correo, Contrasena: Contrasena } 

        try {
            const res = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            if (res.ok) {
                const resData = await res.json()
                alert(resData.message || "Inicio de sesión exitoso")

                // 👇 redirigir después de iniciar sesión
                navigate("/P_L")

                // limpiar
                setCorreo("")
                setContrasena("")
            } else {
                alert("Correo o contraseña incorrectos")
            }
        } catch (err) {
            console.error(err)
            alert("Error al conectar con el servidor")
        }
    }

    return (
        <Iniciosesion
            handleSubmit={handleSubmit}
            setCorreo={setCorreo}
            setContrasena={setContrasena}
        />
    )
}
