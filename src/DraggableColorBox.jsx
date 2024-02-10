import React, { useState } from "react";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const DraggableColorBox = ({ color, name, handleDelete}) => {
  const [isHovered, setIsHovered] = useState(false);

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

  const boxContent= {
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
    justifyContent: "space-between"
  };

  const deleteIcon = {
    transition: "all 0.3s ease-in-out",
    color: isHovered ? "white" : "rgba(0, 0, 0, 0.5)",
    transform: isHovered ? "scale(1.5)" : "none", 
  };
  
  return (
    <div 
      style={boxStyle} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>
      <div style={boxContent}>
        <span>{ name ? name : color}</span>
        <DeleteTwoToneIcon 
          style={deleteIcon} 
          className="delete-icon" 
          onClick={handleDelete} />
      </div>
    </div>
  );
};

export default DraggableColorBox;
