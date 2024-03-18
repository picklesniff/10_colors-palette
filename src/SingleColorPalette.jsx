import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteStyles from "./styles/PaletteStyles";
import PaletteFooter from './PaletteFooter';
import mediaQuery from "./styles/mediaQuery";

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
      key={color.name}
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
      <style>{`
        @media ${mediaQuery.down("lg")} {
          .ColorBox {
            width: 100%;
            height: 10%;
          }
        }
      `}</style>
    </div>
  );
}

export default SingleColorPalette;
