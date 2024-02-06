import React from "react";

const styles = {
  root: {
    width: "20%",
    height: "165%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px"
  }
};

function DraggableColorBox(props) {
    const { color } = props;
  return (
    <div
      style={{ ...styles.root, backgroundColor: color }}
    >
      {color}
    </div>
  );
}
export default DraggableColorBox;