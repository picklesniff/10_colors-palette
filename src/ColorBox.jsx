import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import ColorBoxStyles from './styles/ColorBoxStyles';

function ColorBox({ background, name, format, moreUrl, showLink }) {
  const [copied, setCopied] = useState(false);
  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const hexValue = background.hex;
  const rgbValue = chroma(hexValue).rgb().join(', ');
  const rgbaValue = chroma(hexValue).rgba().join(', ');
  const copyText =
    format === 'hex'
      ? background.hex
      : format === 'rgb'
      ? `rgb(${rgbValue})`
      : `rgba(${rgbaValue})`;
  const isDarkColor = chroma(hexValue).luminance() <= 0.25;
  const isLightColor = chroma(hexValue).luminance() >= 0.25;
  return (
    <>
   <ColorBoxStyles /> 
      <CopyToClipboard text={copyText} onCopy={changeCopyState}>
        <div style={{ background: background.hex }} className="ColorBox">
          <div
            style={{ background: background.hex }}
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={`${isLightColor && 'dark-text'}`}>{copyText}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
            <span className={isDarkColor && 'light-text'}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && 'dark-text'}`}>Copy</button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={`see-more ${isLightColor ? 'dark-text' : "light-text" }`}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    </>
  );
}

export default ColorBox;

