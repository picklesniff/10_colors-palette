import React, { useState } from "react";
import Slider from "rc-slider";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; 
import "rc-slider/assets/index.css";
import "./Navbar.css";
import './Slider.css';


function Navbar({ level, onSliderChange, format, changeFormat }) {
const handleFormatChange = (e) => {
  const selectedFormat = e.target.value;
  changeFormat(selectedFormat);
  onSliderChange(level, selectedFormat);
  };
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#"> reactcolorpicker </a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            className="slider"
            min={100}
            max={900}
            step={100}
            defaultValue={500}
            onChange={onSliderChange}
          />
        </div>
      </div>
      <div className='select-container'>
          <Select value={format} onChange={handleFormatChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
    </header>
  );
}

export default Navbar;
