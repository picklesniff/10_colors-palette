import React from 'react';

const MiniPaletteStyles = () => {
  return (
    <style>{`
      .miniPalette {
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.5rem;
        position: relative;
        overflow: hidden;
        cursor: pointer;
      }

      .miniPalette:hover svg {
        opacity: 1;
      }

      .colors {
        background-color: #dae1e4;
        height: 150px;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
      }

      .miniColor {
        height: 25%;
        width: 20%;
        display: inline-block;
        margin: 0 auto;
        position: relative;
        margin-bottom: -3.5px;
      }

      .deleteIcon {
        color: white;
        background-color: #eb3d30;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 10px;
        z-index: 10;
        opacity: 0;
      }

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0rem;
        color: black;
        padding-top: 0.5rem;
        font-size: 1rem;
        position: relative;
      }

      .emoji {
        margin-left: 0.5rem;
        font-size: 1.5rem;
      }
    `}</style>
  );
};

export default MiniPaletteStyles;
