import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const PaletteFormNav = ({ open, palettes, AppBar, setOpen, savePalette, colors }) => {
    const [newPaletteName, setNewPaletteName] = useState("");
    const navigate = useNavigate();
    const formRef = useRef(null);
    const handleDrawerOpen = () => {
        setOpen(true);
      };
      const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "newPaletteName") {
          setNewPaletteName(value);
        }
      };
      const handleSubmit = () => {
        let newName = newPaletteName;
        const newPalette = {
          paletteName: newName,
          id: newName.toLowerCase().replace(/ /g, "-"),
          colors: colors,
        };
        savePalette(newPalette);
        navigate("/");
      };
useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
    palettes.every(
      ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
    ))
    }, [palettes]);
  

  return (
    <div>
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
            New Palette
          </Typography>
          <ValidatorForm ref={formRef} onSubmit={handleSubmit}>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              name="newPaletteName"
              onChange={handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "Palette name already exists!",
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;
