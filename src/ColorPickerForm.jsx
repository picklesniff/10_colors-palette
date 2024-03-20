import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm } from "react-material-ui-form-validator";
import { ColorPickerContainer, AddColorButton, ColorNameInput } from './styles/ColorPickerFormStyles';

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
    <ColorPickerContainer>
      <ChromePicker
        style={{ width: "333px !important" }}
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        value={currentColor}
      />
      <ValidatorForm ref={formRef} onSubmit={handleSubmit}>
        <ColorNameInput
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
        <AddColorButton
          variant="contained"
          color="secondary"
          disabled={paletteIsFull}
          type="submit"
          paletteisfull={paletteIsFull.toString()}
          currentcolor={currentColor}
        >
          {paletteIsFull ? "Palette is Full" : "Add Color"}
        </AddColorButton>
      </ValidatorForm>
    </ColorPickerContainer>
  );
};

export default ColorPickerForm;
