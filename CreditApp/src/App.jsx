import MontoTotal from "./components/montoTotal";
import Plazo from "./components/plazo";
import CuotaFija from "./components/cuotafija";
import Final from "./components/final"
import "rc-slider/assets/index.css";
import { useState } from "react";

import "./App.css";

function App() {
  const [monto, setValorMonto] = useState(0);
  const [plazo, setValorPlazo] = useState(0);

  const handleValorMontoCambiado = (nuevoValorB) => {
    setValorMonto(nuevoValorB);
  };
  const handleValorPlazoCambiado = (nuevoValorB) => {
    setValorPlazo(nuevoValorB);
  };
  return (
    <div className="card text-bg-primary mb-3" style={{ width: "400px", height: "450px", backgroundColor: "blue" }}>
      <h1 style={{ fontSize: "30px" }}>SIMULA TU CREDITO</h1>
      <br />
      <MontoTotal ValorMontoCambiado={handleValorMontoCambiado} />
      <Plazo valorPlazoCambiado={handleValorPlazoCambiado} />
      <CuotaFija monto={monto} plazo={plazo} />
      <Final />
    </div>
  );
}

export default App;
