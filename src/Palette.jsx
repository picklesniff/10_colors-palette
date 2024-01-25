import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

function Palette({ palette }) {
  const [sliderValue, setSliderValue] = useState(500); 

  const colorBoxes = palette.colors[sliderValue].map((color) => (
    <ColorBox key={color.name} background={color.hex} name={color.name} />
  ));

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className="Palette">
        <Navbar level={sliderValue} onChange={handleSliderChange} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>

  );
}
export default Palette;
