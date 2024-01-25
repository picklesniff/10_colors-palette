import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Slider.css";
import "./Navbar.css";

function Navbar({ level, onChange }) {
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
            onChange={onChange}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
