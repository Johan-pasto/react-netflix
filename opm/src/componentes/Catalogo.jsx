export default function Catalogo({ peliculas }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {peliculas.map((peli) => (
        <div key={peli._id} style={{ width: "200px" }}>
          <img 
            src={peli.imagen} 
            alt={peli.titulo} 
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h3>{peli.titulo}</h3>
        </div>
      ))}
    </div>
  )
}
