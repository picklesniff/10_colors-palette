import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CssBaseline, Toolbar, Typography, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PaletteMetaForm from "./PaletteMetaForm";
import { AppBar, NavBtns, Btn } from "./styles/PaletteFormNavStyles"; 

const PaletteFormNav = ({
  open,
  palettes,
  setOpen,
  savePalette,
  colors,
}) => {
  const [formShowing, setFormShowing] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const showForm = () => {
    setFormShowing(true);
  };

  const hideForm = () => {
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
        <NavBtns>
          <Link to="/">
            <Btn variant="contained" color="secondary">
              Go Back
            </Btn>
          </Link>
          <Btn variant="contained" onClick={showForm}>
            Save
          </Btn>
        </NavBtns>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          open={formShowing}
          palettes={palettes}
          colors={colors}
          savePalette={savePalette}
          hideForm={hideForm}
        />
      )}
    </div>
  );
};

export default PaletteFormNav;
