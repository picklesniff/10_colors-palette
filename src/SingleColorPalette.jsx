import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PaletteFooter from './PaletteFooter';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

function SingleColorPalette({ palette, colorId }) {
  const [format, setFormat] = useState("hex");
  const changeFormat = (val) => {
    setFormat(val);
  };
  const gatherShades = (palette, colorToFilterBy) => {
    const allColors = palette.colors;
    let shades = [];
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };
  const shades = gatherShades(palette, colorId);
  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={uuidv4()}
      name={color.name}
      background={color}
      showLink={false}
      format={format}
    />
  ));

  return (
    <div className="Palette">
      <Navbar
        showingAllColors={false}
        format={format}
        changeFormat={changeFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter palette={palette} />
    </div>
  );
}

export default SingleColorPalette;
