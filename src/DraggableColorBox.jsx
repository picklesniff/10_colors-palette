import React from "react";

const DraggableColorBox = ({ color }) => {
  const boxStyle = {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    backgroundColor: color,
  };

  return <div style={boxStyle}>{color}</div>;
};

export default DraggableColorBox;
