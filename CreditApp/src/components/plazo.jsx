
import Slider from 'rc-slider';
import { useState } from "react";
import Min3 from "./min3";
import Max24 from "./max24";

function Plazo({valorPlazoCambiado}) {

    const [sliderValue, setSliderValue] = useState(0);
    const handleSliderChange = (value) => {
      setSliderValue(value);
      valorPlazoCambiado(value)
    };
  return (
    <div>
        <div className="slide2" style={{display:"flex"}}>
          
          
            <label style={{width:"70%",textAlign: "left"}}  htmlFor="customRange2" className="form-label">PLAZO</label>
            <input type="number" style={{width:"30%"}} value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
        </div>
        <Slider min={3} max={24} id="customRange2" value={sliderValue} onChange={handleSliderChange} />
        <div style={{display:"flex"}}>
                <Min3 />
                <Max24/>
            </div>
    </div>
  )
}

export default Plazo