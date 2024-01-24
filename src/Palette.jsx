import React from "react";
import ColorBox from "./ColorBox";
import './Palette.css'

function Palette ({ colors }) {
  const colorBoxes = colors.map(color => (
    <ColorBox key={color.name} background={color.color} name={color.name} />
  ));

  return (
    <div className="Palette">
      <div className="Palette-colors">
      {colorBoxes}
      </div>
    </div>
  );
}
export default Palette;
