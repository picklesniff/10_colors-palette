import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const PaletteMetaForm = ({ palettes, colors, savePalette, handleClose, open }) => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [newPaletteName, setNewPaletteName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

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

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Your Palette</DialogTitle>
        <ValidatorForm ref={formRef} onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              To save your palette, please set a unique name and pick an emoji.
            </DialogContentText>
            <Picker data={data} onEmojiSelect={console.log} style={{theme: 'ligh'}}t />

            <TextValidator
              fullWidth
              margin='normal'
              variant="filled"
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </React.Fragment>
  );
};

export default PaletteMetaForm;
