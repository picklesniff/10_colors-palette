import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import PaletteListStyles from "./styles/PaletteListStyles";

function PaletteList({ palettes }) {
  const navigate = useNavigate();

  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  return (
    <>
      <PaletteListStyles />
      <div className="paletteList">
        <div className="paletteListContent">
          <div className="paletteListHeader">
            <h1 className='header'>React Colors</h1>
            <Link className='link' to="/palette/new">Create Palette</Link>
          </div>
          <div className="paletteGrid">
            {palettes.map((palette) => (
              <MiniPalette
                key={palette.id}
                paletteName={palette.paletteName}
                emoji={palette.emoji}
                colors={palette.colors}
                paletteId={palette.id}
                paletteClick={goToPalette}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PaletteList;
