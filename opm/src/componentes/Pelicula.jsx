export default function Pelicula({ titulo, imagen }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#1e1e2f",
            color: "#fff",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
        }}>
            <img 
                src={imagen} 
                alt={titulo} 
                style={{ width: "100%", height: "300px", objectFit: "cover" }} 
            />
            <h3 style={{ padding: "10px" }}>{titulo}</h3>
        </div>
    )
}
