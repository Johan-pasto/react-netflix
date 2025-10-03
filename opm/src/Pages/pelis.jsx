import { useEffect, useState } from "react"
import Catalogo from "../componentes/Catalogo"
import '../componentes/styles/peli' 

export default function Fcatalogo() {
    const [peliculas, setPeliculas] = useState([])
    const [busqueda, setBusqueda] = useState("") 
    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const res = await fetch("http://localhost:8000/peliculas")
                if (res.ok) {
                    const data = await res.json()
                    setPeliculas(data)
                }
            } catch (err) {
                console.error("Error al cargar películas:", err)
            }
        }
        fetchPeliculas()
    }, [])

    // Filtrar las películas por el título
    const peliculasFiltradas = peliculas.filter(peli =>
        peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
    )

    return (
        <div>
            <h1>🎬 Catálogo de Películas</h1>

            {/* Buscador */}
            <input
                type="text"
                placeholder="Buscar película..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="busqueda-input"
            />

            {/* Mostrar catálogo filtrado */}
            <Catalogo peliculas={peliculasFiltradas} />
        </div>
    )
}
