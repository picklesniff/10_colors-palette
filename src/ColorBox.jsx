import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import "./ColorBox.css";

function ColorBox({ background, name, format, moreUrl, showLink}) {
  const [copied, setCopied] = useState(false);

  const hexValue = background.hex;
  const rgbValue = chroma(hexValue).rgb().join(", ");
  const rgbaValue = chroma(hexValue).rgba().join(", ");

  const copyText =
    format === "hex"
      ? background.hex
      : format === "rgb"
      ? `rgb(${rgbValue})`
      : `rgba(${rgbaValue})`;

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={copyText} onCopy={changeCopyState}>
      <div style={{ background: background.hex }} className="ColorBox">
        <div
          style={{ background: background.hex }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{copyText}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className="see-more">More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
