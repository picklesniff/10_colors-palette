import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

function Palette({ palette }) {
  const [sliderValue, setSliderValue] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = palette.colors[sliderValue].map((color) => (
    <ColorBox key={color.id} background={color} name={color.name} format={format} />
  ));

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
  const changeFormat = (val) => {
    setFormat(val);
  };
  
  return (
    <div className="Palette">
        <Navbar 
        level={sliderValue} 
        onSliderChange={handleSliderChange} 
        format={format}
        changeFormat={changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {palette.paletteName}
          <span>{palette.emoji}</span>
        </footer>
      </div>
  );
}
export default Palette;
