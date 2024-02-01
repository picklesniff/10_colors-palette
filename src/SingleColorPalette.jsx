import React from "react";
import { v4 as uuidv4 } from 'uuid';
import ColorBox from "./ColorBox";

function SingleColorPalette({ palette, colorId }) {
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
    />
  ));

  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default SingleColorPalette;
