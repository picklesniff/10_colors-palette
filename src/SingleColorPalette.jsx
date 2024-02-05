import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteStyles from "./styles/PaletteStyles";
import PaletteFooter from './PaletteFooter';

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
    <div className="SingleColorPalette Palette">
      <PaletteStyles />
      <Navbar
        showingAllColors={false}
        format={format}
        changeFormat={changeFormat}
      />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
            <Link to={`/palette/${palette.id}`} className="back-button">Go Back</Link>
        </div>
        </div>
      <PaletteFooter palette={palette} />
    </div>
  );
}

export default SingleColorPalette;
