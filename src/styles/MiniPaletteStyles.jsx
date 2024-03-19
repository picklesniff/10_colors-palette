import React from 'react';
import mediaQuery from './mediaQuery';

const MiniPaletteStyles = () => {
  return (
    <style>{`

      .miniPalette {
        background-color: rgba(248, 243, 230, 0.7);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        border-radius: 5px;
        padding: 0.35rem;
        position: relative;
        overflow: hidden;
        cursor: pointer;
      }

      .miniPalette:hover .title,
      .miniPalette:hover .emoji {
        transform: scale(1.025);
        transition: transform 0.35s ease-in-out;
        text-shadow: rgba(225, 225, 225, 0.25) 0px 54px 55px, rgba(225, 225, 225, 0.12) 20px -10px 30px, rgba(225, 225, 225, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        
      }
      .miniPalette:hover svg {
        opacity: 1;
      }
      .miniPalette:hover {
        transform: scale(1.05);
        transition: transform 0.35s ease-in-out;
      }

      .colors {
        background-color: rgba(248, 243, 230, 0.1);
        height: 200px;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
      }

      .miniColor {
        height: 25%;
        width: 20%;
        display: inline-block;
        position: relative;
        margin: -1.88px 0;
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
        justify-content: space-around;
        align-items: center;
        margin: 0.5rem;
        color: #303542;
        font-size: 1rem;
        position: relative;
        transition: transform 0.3s ease-in-out;
      }

      .emoji {
        margin-left: 0.55rem;
        font-size: 1.5rem;
        transition: transform 0.3s ease-in-out;
      }

      ${mediaQuery.down("lg")} {
        .colors {
          height: 165px;
        }
        .title {
          font-size: 0.95em;
          padding: 0rem;
        }
      }

      ${mediaQuery.down("md")} {
        .colors {
          height: 125px;
        }
        .title {
          font-size: 0.8em;
          padding: 0.02rem;
        }
      }

      ${mediaQuery.down("xs")} {
        .colors {
          height: 100px;
        }
      }
    `}</style>
  );
};

export default MiniPaletteStyles;
