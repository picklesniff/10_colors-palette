import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import PaletteStyles from "./styles/PaletteStyles";

function Palette({ palette }) {
  const [sliderValue, setSliderValue] = useState(500);
  const [format, setFormat] = useState("hex");

  const colorBoxes = palette.colors[sliderValue].map((color) => (
    <ColorBox
      key={color.id}
      id={color.id}
      background={color}
      name={color.name}
      format={format}
      moreUrl={`/palette/${palette.id}/${color.id}`}
      showLink={true}
    />
  ));

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
  const changeFormat = (val) => {
    setFormat(val);
  };

  return (
    <div className="Palette">
      <PaletteStyles />
      <Navbar
        level={sliderValue}
        onSliderChange={handleSliderChange}
        format={format}
        changeFormat={changeFormat}
        showingAllColors={true}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter palette={palette} />
    </div>
  );
}
export default Palette;
