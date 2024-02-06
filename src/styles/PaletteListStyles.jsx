import React from "react";

const PaletteListStyles = () => {
  return (
    <style>{`
      .paletteList {
        background-color: darkblue;
        min-height: 100vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 2rem;
      }

      .paletteListContent {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .paletteListHeader {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
      }

      .paletteList .link {
        color: white;
        text-decoration: none;
      }

      .paletteGrid {
        box-sizing: border-box;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
      }
    `}</style>
  );
};

export default PaletteListStyles;
