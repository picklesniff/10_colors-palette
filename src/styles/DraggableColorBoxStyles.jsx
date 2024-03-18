import React from "react";
import mediaQuery from "./mediaQuery";

const DraggableColorBoxStyles = () => {
  return (
    <style>{`
    @keyframes shake {
      0% { transform: rotate(-10deg); }
      25% { transform: rotate(10deg); }
      50% { transform: rotate(-10deg); }
      75% { transform: rotate(10deg); }
      100% { transform: rotate(-10deg); }
    }
      .boxStyle {
        width: 20%;
        height: 25%;
        margin: 0 auto;
        display: inline-block;
        position: relative;
        cursor: grab;
        margin-bottom: -3.5px;
      }

      .boxContent {
        position: absolute;
        width: 100%;
        left: 0px;
        padding: 10px;
        color: rgba(0, 0, 0, 0.5);
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
      }

      .deleteIcon {
        transition: all 0.3s ease-in-out;
        color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
      .deleteIcon:hover {
        color: white;
        animation: shake 0.5s ease-in-out;
        transform: scale(1.25);
      }

      .colorName {
        display: flex;
        align-items: center;
        font-size: 9px;
      }

      ${mediaQuery.down("md")} {
        .boxStyle {
          width: 100%;
          height: 5%;
        }
      }
    `}</style>
  );
};

export default DraggableColorBoxStyles;
