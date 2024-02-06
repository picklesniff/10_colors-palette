import React from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "rc-slider/assets/index.css";
import NavbarStyles from "./styles/NavbarStyles";

function Navbar({ level, onSliderChange, format, changeFormat, showingAllColors }) {
  const handleFormatChange = (e) => {
    const selectedFormat = e.target.value;
    changeFormat(selectedFormat);
    setSnackbarOpen(true);
  };

  const handleSliderChange = (newValue) => {
    onSliderChange(newValue, format);
  };

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <NavbarStyles />
      <header className="Navbar">
        <div className="logo">
          <Link to='/' className="link">reactcolorpicker</Link>
        </div>
        {showingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className="slider">
              <Slider
                className="slider"
                min={100}
                max={900}
                step={100}
                defaultValue={500}
                onChange={handleSliderChange}
              />
            </div>
          </div>
        )}
        <div className='select-container'>
          <Select value={format} onChange={handleFormatChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={snackbarOpen}
          autoHideDuration={4000}
          message={<span id='message-id'>Format changed to {format.toUpperCase()}</span>}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          onClose={handleCloseSnackbar}
          action={[
            <IconButton
              onClick={handleCloseSnackbar}
              color='inherit'
              key='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    </>
  );
}

export default Navbar;
