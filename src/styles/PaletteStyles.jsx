import React from "react";

const PaletteStyles = () => {
  return (
    <style>{`
      .Palette {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .Palette-colors {
        height: 90%;
      }

      .Palette-footer {
        background-color: white;
        height: 5vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: bold;
      }

      .emoji {
        font-size: 1.5rem;
        margin: 0 1rem;
      }
    `}</style>
  );
};

export default PaletteStyles;
