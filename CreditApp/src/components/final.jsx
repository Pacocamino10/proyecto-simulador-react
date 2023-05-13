function Final() {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic example"
      style={{ height: "10%" }}
    >
      <button
        type="button"
        className="btn btn-primary"
        style={{ backgroundColor: "#15BB68", width: "70%", margin: "1px" }}
      >
        OBTENER CREDITO
      </button>

      <button
        type="button"
        className="btn btn-primary"
        style={{ backgroundColor: "#1C0EE2", width: "30%", margin: "1px" }}
      >
        <p style={{fontSize:"10px"}}>VER DETALLES CUOTA</p>
      </button>
    </div>
  );
}

export default Final;
