import React from "react";
import MiniPalette from "./MiniPalette";
import Box from "@mui/material/Box";

function PaletteList({ palettes }) {
  return (
    <Box
      sx={{
        backgroundColor: "darkblue",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>React Colors</h1>
        </Box>
        <Box
          sx={{
            boxSizing: "border-box",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "2rem",
          }}
        >
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              paletteName={palette.paletteName}
              emoji={palette.emoji}
              colors={palette.colors}
            />  
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default PaletteList;
