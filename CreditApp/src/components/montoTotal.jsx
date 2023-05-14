
import Slider from 'rc-slider';
import { useState } from "react";
import Min from "./min";
import Max from "./max";

function MontoTotal({ValorMontoCambiado}) {

    const [sliderValue, setSliderValue] = useState(0);
    const handleSliderChange = (value) => {
      setSliderValue(value);
      ValorMontoCambiado(value);
    };
  return (
    <div>
        <div className="slide1" style={{display:"flex"}}>
          
          
            <label style={{width:"70%",textAlign: "left"}}  htmlFor="customRange2" className="form-label">MONTO TOTAL</label>
            <input type="number" style={{width:"30%"}} value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
        </div>
        <Slider min={5000} max={50000} id="customRange2" value={sliderValue} onChange={handleSliderChange} />
        <div style={{display:"flex"}}>
                <Min/>
                <Max/>
            </div>
    </div>
  )
}

export default MontoTotal