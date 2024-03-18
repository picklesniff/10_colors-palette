import React from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { SortableElement } from "react-sortable-hoc";
import DraggableColorBoxStyles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(({ color, name, removeColor }) => {
  const handleDelete = () => {
    removeColor(name);
  };

  return (
    <div
      className="boxStyle"
      style={{
        backgroundColor: color.color,
      }}
    >
      <div className="boxContent">
        <span className="colorName">{name}</span>
        <DeleteTwoToneIcon className="deleteIcon" onClick={handleDelete} />
      </div>
      <DraggableColorBoxStyles />
    </div>
  );
});

export default DraggableColorBox;
