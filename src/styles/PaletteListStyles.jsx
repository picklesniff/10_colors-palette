import React from "react";
import mediaQuery from "./mediaQuery";

const PaletteListStyles = () => {
  return (
    <style>{`
      .paletteList {
        min-height: 100vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 1.5rem;
        background: linear-gradient(270deg, #2706ba, #350a69, #4b0ea5, #820c7a, #950e8c, #820945, #930404, #914f08, #a7a70b, #520977, #073c75, #5a065c, #050855);
        background-size: 2600% 2600%;
        animation: gradient 28s ease infinite;
      }

      .paletteListContent {
        width: 65%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }

      .paletteListHeader {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }

      .paletteList .link {
        color: white;
        text-decoration: none;
      }

      .paletteGrid {
        box-sizing: border-box;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
      }
      
      .addNewPalette{
        text-align: center;
      }
      .addPalette  {
        margin: auto;
        display: flex;
        color: white;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }

      .addIcon {
      margin-top: 25%
      }

      .addNewPalette:hover,
      .addNewPalette:hover svg {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
        }

      ${mediaQuery.down("lg")} {
        .paletteGrid {
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1.8rem;
        }
        .paletteListHeader {
          font-size: 0.75rem;
        }
         .paletteListContent {
          width: 80%;
        }
      }
      ${mediaQuery.down("xs")} {
        .paletteGrid {
          grid-gap: 1.2em;
          grid-template-columns: repeat(2, 1fr);
        }
        .paletteListContent {
          width: 85%;
        }
      }

      @keyframes gradient {
        0% { background-position: 0% 54%; }
        50% { background-position: 100% 47%; }
        100% { background-position: 0% 54%; }
      }
    `}</style>
  );
};

export default PaletteListStyles;
