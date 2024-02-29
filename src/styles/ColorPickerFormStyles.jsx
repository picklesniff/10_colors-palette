import { styled, css } from '@mui/system';
import Button from "@mui/material/Button";
import { TextValidator } from "react-material-ui-form-validator";

export const ColorPickerContainer = styled("div")({
  width: "100%",
  "& .chrome-picker": {
    width: "333px !important",
  },
});

export const AddColorButton = styled(Button)(
  ({ paletteIsFull, currentColor }) => css`
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    background-color: ${paletteIsFull ? 'grey' : currentColor};
  `
);

export const ColorNameInput = styled(TextValidator)({
  width: "100%",
  height: "70px",
});
