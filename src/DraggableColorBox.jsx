import React from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { SortableElement } from "react-sortable-hoc";

const DraggableColorBox = SortableElement(({ color, name, removeColor }) => {
  console.log(removeColor)
  const handleDelete = () => {
    removeColor(name); 
};
    const boxStyle = {
      width: "20%",
      height: "25%",
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "grab",
      marginBottom: "-3.5px",
      backgroundColor: color.color,
    };

    const boxContent = {
      position: "absolute",
      width: "100%",
      left: "0px",
      bottom: "0px",
      padding: "10px",
      color: "rgba(0, 0, 0, 0.5)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
      display: "flex",
      justifyContent: "space-between",
    };

    const deleteIcon = {
      transition: "all 0.3s ease-in-out",
      color: "rgba(0, 0, 0, 0.5)",
      transform: "none",
      cursor: "pointer", 
    };

    return (
      <div style={boxStyle}>
        <div style={boxContent}>
          <span>{name}</span>
          <DeleteTwoToneIcon
            style={deleteIcon}
            className="delete-icon"
            onClick={handleDelete}
          />
        </div>
      </div>
    );
  }
);

export default DraggableColorBox;
