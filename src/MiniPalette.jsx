import React from 'react';
import Box from '@mui/material/Box';
import MiniPaletteStyles from './styles/MiniPaletteStyles';
import DeleteIcon from '@mui/icons-material/Delete';

function MiniPalette(props) {
  const { paletteName, emoji, colors, paletteId, paletteClick, handleDelete} = props;

  const handleClick = () => {
    paletteClick(paletteId);
  };

  const deletePalette = (e) => {
    e.stopPropagation();
    handleDelete(paletteId)
  }

  return (
    <>
      <MiniPaletteStyles />
      <Box className="miniPalette" onClick={handleClick}>
          <DeleteIcon onClick={deletePalette} className="deleteIcon"/>
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
