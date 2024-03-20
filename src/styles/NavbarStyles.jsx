import React from "react";
import mediaQuery from "./mediaQuery";

const NavbarStyles = () => (
  <style>{`
    .Navbar {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 6vh;
    }
    
    .link {
      text-decoration: none;
      color: black;
    }

    .logo {
      margin-right: 15px;
      padding: 0 13px;
      font-size: 22px;
      background-color: #eceff1;
      font-family: Roboto;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .slider {
      width: 340px;
      margin: 0 10px;
      display: inline-block;
    }
    .slider .rc-slider-track {
      background-color: transparent;
    }

    .slider .rc-slider-rail {
      height: 8px;
    }

    .slider .rc-slider-handle,
    .slider .rc-slider-handle:active,
    .slider .rc-slider-handle:focus,
    .slider .rc-slider-handle:hover {
      background-color: green;
      outline: none;
      border: 2px solid green;
      box-shadow: none;
      width: 13px;
      height: 13px;
      margin-left: -7px;
      margin-top: -3px;
    }

    ${mediaQuery.down("md")} {
      .logo {
        font-size: 18px; 
      }
      .slider {
        width: 155px; 
      }
    }

    ${mediaQuery.down("xs")} {
      .logo {
        font-size: 14px; 
      }
      .slider {
        width: 113px; 
      }
    }

    .select-container {
      margin-left: auto;
      margin-right: 1rem;
    }

  `}</style>
);

export default NavbarStyles;
