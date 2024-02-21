import React, { useState, useCallback } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import DraggableColorList from "./DraggableColorList";
import ColorPickerForm from "./ColorPickerForm";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronLeft";
import { arrayMoveImmutable } from "array-move";
import PaletteFormNav from "./PaletteFormNav";

const drawerWidth = 350;

const NewPaletteForm = ({ savePalette, palettes }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [colors, setColors] = useState(palettes[0].colors);
  const defaultProps = {
    maxColors: 20,
  };

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      height: "calc(100vh - 64px)",
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),

      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );
  const container = {
    width: "95%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const btns = {
    width: "100%",
    margin: "2rem 0rem",
  };
  const btn = {
    width: "50%",
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
    var rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
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
        drawerWidth={drawerWidth}
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
            {theme.direction === "ltr" && <ChevronRightIcon />}
          </IconButton>
        </Toolbar>
        <div style={container}>
          <Divider />
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div style={btns}>
            <Button
              style={btn}
              variant="contained"
              color="secondary"
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button
              style={btn}
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
