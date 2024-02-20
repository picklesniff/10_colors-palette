import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@mui/material/Button";

const ColorPickerForm = ({ paletteIsFull, colors, addNewColor }) => {
  const formRef = useRef(null);
  const [newColorName, setNewColorName] = useState("");
  const [currentColor, setCurrentColor] = useState("#E7CF0D");

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
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        value={currentColor}
      />
      <ValidatorForm ref={formRef} onSubmit={handleSubmit}>
        <TextValidator
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
          style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
          type="submit"
        >
          {paletteIsFull ? "Palette is Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
