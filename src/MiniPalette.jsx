import React from 'react';
import Box from '@mui/material/Box';
import MiniPaletteStyles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const { paletteName, emoji, colors, paletteId, paletteClick } = props;

  const handleClick = () => {
    paletteClick(paletteId);
  };

  return (
    <>
      <MiniPaletteStyles />
      <Box className="miniPalette" onClick={handleClick}>
        <section className="secondary">
          <div className="colors">
            {colors.map((color) => (
              <div
                className="miniColor"
                key={color.name}
                style={{ backgroundColor: color.color }}
              />
            ))}
          </div>
          <h5 className="title">
            {paletteName} <span className="emoji">{emoji}</span>
          </h5>
        </section>
      </Box>
    </>
  );
}

export default MiniPalette;
