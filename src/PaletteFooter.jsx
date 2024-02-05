import React from "react";
import PaletteStyles from "./styles/PaletteStyles";

function PaletteFooter({ palette }) {
  return (
    <>
    <PaletteStyles />
    <footer className="Palette-footer">
      {palette.paletteName}
      <span className="emoji">{palette.emoji}</span>
    </footer>
    </>
  
  );
}
export default PaletteFooter;
