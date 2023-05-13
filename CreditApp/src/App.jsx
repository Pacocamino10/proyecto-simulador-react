import MontoTotal from "./components/montoTotal";
import Plazo from "./components/plazo";
import CuotaFija from "./components/cuotafija";
import Final from "./components/final"
import "rc-slider/assets/index.css";

import "./App.css";

function App() {
  return (
    <div className="card text-bg-primary mb-3" style={{ width: "400px", height: "500px", backgroundColor: "blue" }}>
      <h1 style={{ fontSize: "30px" }}>SIMULA TU CREDITO</h1>
      <br />
      <MontoTotal />
      <Plazo />
      <CuotaFija />
      <Final />
    </div>
  );
}

export default App;