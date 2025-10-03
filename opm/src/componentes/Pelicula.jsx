import '../componentes/styles/Pelicula.css'; 
export default function Pelicula({ titulo, imagen }) {
    return (
        <div className="pelicula-card">
            <img 
                src={imagen} 
                alt={titulo} 
                className="pelicula-img" 
                />
            <h3 className="pelicula-title">{titulo}</h3>
        </div>
    )
}
