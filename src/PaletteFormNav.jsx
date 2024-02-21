import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const PaletteFormNav = ({
  open,
  palettes,
  setOpen,
  savePalette,
  colors,
  drawerWidth,
}) => {
  const [formShowing, setFormShowing] = React.useState(false);

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const navBtns = {
    margin: "43px",
  };
  const btn = {
    margin: "0 0.3rem",
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const showForm = () => {
    setFormShowing(true);
  };
  const handleClose = () => {
    setFormShowing(false);
  };
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" color="default" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography>
        </Toolbar>
        <div style={navBtns}>
          <Link to="/">
            <Button variant="contained" color="secondary" style={btn}>
              Go Back
            </Button>
          </Link>
          <Button variant="contained" onClick={showForm} style={btn}>
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          open={formShowing}
          palettes={palettes}
          colors={colors}
          savePalette={savePalette}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default PaletteFormNav;
