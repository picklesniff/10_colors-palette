import React, { useState, useEffect, useRef, useCallback } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import DraggableColorList from "./DraggableColorList";
import ColorPickerForm from "./ColorPickerForm";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { arrayMoveImmutable } from "array-move";
import PaletteFormNav from "./PaletteFormNav";

const drawerWidth = 350;

const NewPaletteForm = ({ savePalette, palettes }) => {
  const theme = useTheme();
  const formRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [colors, setColors] = useState(palettes[0].colors);
  const [newColorName, setNewColorName] = useState("");
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
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
    setNewColorName("");
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
        AppBar={AppBar}
        setOpen={setOpen}
        savePalette={savePalette}
        colors={colors}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
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
            {theme.direction === "ltr" && <ChevronLeftIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button
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
