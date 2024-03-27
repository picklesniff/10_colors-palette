import React, { useState, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { arrayMoveImmutable } from "array-move";
import PaletteFormNav from "./PaletteFormNav";
import DraggableColorList from "./DraggableColorList";
import ColorPickerForm from "./ColorPickerForm";
import { Main, containerStyles, btnsStyles, btnStyles, chevronLeft } from "./styles/NewPaletteFormStyles";
import { DRAWER_WIDTH } from "./styles/constants";
const drawerWidth = DRAWER_WIDTH;

const NewPaletteForm = ({ savePalette, palettes }) => {
  const theme = useTheme(); 
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(palettes[0].colors);
  const defaultProps = {
    maxColors: 20,
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const removeColor = useCallback(
    (colorName) => {
      setColors(colors.filter((color) => color.name !== colorName));
    },
    [colors]
  );

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMoveImmutable(colors, oldIndex, newIndex));
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = palettes.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = colors.some(
        color => color.name === randomColor.name
      );
    }
    setColors([...colors, randomColor]);
  };

  const paletteIsFull = colors.length >= defaultProps.maxColors;

  return (
    <Box style={{ display: "flex" }}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        setOpen={setOpen}
        savePalette={savePalette}
        colors={colors}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            alignItems: "center",
            display: "flex",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" && <ChevronLeftIcon style={chevronLeft} />}
          </IconButton>
        </Toolbar>
        <div style={containerStyles}>
          <Divider />
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div style={btnsStyles}>
            <Button
              style={btnStyles}
              variant="contained"
              color="secondary"
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button
              style={btnStyles}
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            colors={colors}
            addNewColor={addNewColor}
          />
        </div>
      </Drawer>
      <Main open={open}>
        <Toolbar />
        <DraggableColorList
          removeColor={removeColor}
          onSortEnd={onSortEnd}
          colors={colors}
          axis="xy"
        />
      </Main>
    </Box>
  );
};

export default NewPaletteForm;
