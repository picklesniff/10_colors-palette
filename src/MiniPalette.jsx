import React from "react";
import Box from "@mui/material/Box";

function MiniPalette(props) {
  const { paletteName, emoji, colors } = props;

  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          cursor: "pointer",
        },
        "& .colors": {
          backgroundColor: "#dae1e4",
          height: "150px",
          width: "100%",
          borderRadius: "5px",
          overflow: "hidden",
        },
        "& .miniColor": {
          height: "25%",
          width: "20%",
          display: "inline-block",
          margin: "0 auto",
          position: "relative",
          marginBottom: "-3.5px",
        },
        "& .title": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0rem",
          color: "black",
          paddingTop: "0.5rem",
          fontSize: "1rem",
          position: "relative",
        },
        '& .emoji': {
          marginLeft: "0.5rem",
          fontSize: "1.5rem",
        },
      }}
    >
      <section className="secondary">
        <div className="colors">
          {colors.map((color) => (
            <div
              className="miniColor"
              key={color.name}
              style={{ backgroundColor: color.color }}Í
            ></div>
          ))
          }         
        </div>
        <h5 className="title">
          {paletteName} <span className='emoji'>{emoji}</span>
        </h5>
      </section>
    </Box>
  );
}

export default MiniPalette;
