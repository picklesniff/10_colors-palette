import React from 'react';
import mediaQuery from './mediaQuery';

const MiniPaletteStyles = () => {
  return (
    <style>{`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }

      .miniPalette {
        background-color: rgba(248, 243, 230, 0.75);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        border-radius: 5px;
        padding: 0.35rem;
        position: relative;
        overflow: hidden;
        cursor: pointer;
      }

      .miniPalette:hover .title,
      .miniPalette:hover .emoji {
        transform: scale(1.075);
        transition: transform 0.35s ease-in-out;
      }
      .miniPalette:hover svg {
        opacity: 1;
      }

      .colors {
        background-color: #dae1e4;
        height: 200px;
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
        margin-bottom: -3.63px;
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
        margin: 0.25rem;
        color: #303542;
        padding: 0.35rem 0rem ;
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
          font-size: 0.88em;
          padding: 0rem;
        }
      }

      ${mediaQuery.down("md")} {
        .colors {
          height: 125px;
        }
        .title {
          font-size: 0.82em;
          padding: 0.15rem;
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
