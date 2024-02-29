import React from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { SortableElement } from "react-sortable-hoc";
import { boxStyle, boxContent, deleteIcon } from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(({ color, name, removeColor }) => {
  const handleDelete = () => {
    removeColor(name); 
  };

  return (
    <div style={{ ...boxStyle, backgroundColor: color.color }}>
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
});

export default DraggableColorBox;
