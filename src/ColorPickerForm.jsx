import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';

const ColorPickerContainer = styled("div")({
    width: "100%",
    "& .chrome-picker": {
      width: "333px !important",
    },
  });

const ColorPickerForm = ({ paletteIsFull, colors, addNewColor }) => {
  const formRef = useRef(null);
  const [newColorName, setNewColorName] = useState("");
  const [currentColor, setCurrentColor] = useState("#E7CF0D");

  const addColor = {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "1.2rem",
    backgroundColor: paletteIsFull ? "grey" : currentColor,
  };
  const colorNameInput = {
    width: "100%",
    height: "70px",
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", () =>
      colors.every(({ color }) => color !== currentColor)
    );
  }, [colors, currentColor]);

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "newColorName") {
      setNewColorName(value);
    }
  };
  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName,
      id: newColorName,
    };
    addNewColor(newColor);
    setNewColorName("");
  };

  return (
    <ColorPickerContainer>
      <ChromePicker
        style={{ width: "333px !important" }}
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        value={currentColor}
      />
      <ValidatorForm ref={formRef} onSubmit={handleSubmit}>
        <TextValidator
          style={colorNameInput}
          placeholder="Color Name"
          variant="filled"
          margin="normal"
          value={newColorName}
          name="newColorName"
          onChange={handleChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!",
          ]}
        />
        <Button
          variant="contained"
          color="secondary"
          disabled={paletteIsFull}
          style={addColor}
          type="submit"
        >
          {paletteIsFull ? "Palette is Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </ColorPickerContainer>
  );
};

export default ColorPickerForm;
