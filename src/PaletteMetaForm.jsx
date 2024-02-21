import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

const PaletteMetaForm = ({ palettes, colors, savePalette, hideForm, open }) => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [newPaletteName, setNewPaletteName] = useState("");
  const [stage, setStage] = useState("form");
  const [selectedEmoji, setSelectedEmoji] = useState("");

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
  const showEmojiPicker = () => {
    setStage("emoji");
  };
  const handleEmojiSelect = (emoji) => {
    handleSubmit(emoji); 
  };
  
  const handleSubmit = (emoji) => {
    let newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: emoji.native, 
    };
    savePalette(newPalette);
    navigate("/");
  };
  return (
    <React.Fragment>
         <Dialog open={stage === "emoji"} onClose={hideForm}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker title="Pick a Palette Emoji" data={data} onEmojiSelect={handleEmojiSelect} />
      </Dialog>
      <Dialog
        open={stage === "form"}
        aria-labelledby="form-dialog-title"
        onClose={hideForm}
      >
        <DialogTitle>Save Your Palette</DialogTitle>
        <ValidatorForm ref={formRef} onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              To save your palette, please set a unique name and pick an emoji.
            </DialogContentText>
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
            <Button onClick={hideForm}>Cancel</Button>
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






