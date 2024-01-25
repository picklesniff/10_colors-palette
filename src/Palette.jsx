import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import './Slider.css'
import "./Palette.css";

function Palette({ palette }) {
  const [sliderValue, setSliderValue] = useState(500); // Initial value, adjust as needed

  const colorBoxes = palette.colors[sliderValue].map((color) => (
    <ColorBox key={color.name} background={color.hex} name={color.name} />
  ));

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className="Palette">
        <Slider className="slider"
          min={100}
          max={900}
          step={100}
          defaultValue={sliderValue}
          onChange={handleSliderChange}
        />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>

  );
}
export default Palette;
