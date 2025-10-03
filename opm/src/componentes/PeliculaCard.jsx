const PeliculaCard = ({ peli }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        background: "#111",
        color: "white",
      }}
    >
      <img
        src={peli.imagen}
        alt={peli.titulo}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3 style={{ marginTop: "10px" }}>{peli.titulo}</h3>
    </div>
  );
};

export default PeliculaCard;
