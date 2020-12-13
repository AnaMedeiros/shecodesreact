import React from "react";
import reactLogo from "./images/react_logo.png";

export default function Header() {
  return (
    <div className="secondHeader">
      <img
        className="sheCodesReactLogo"
        src={reactLogo}
        alt="SheCodesReactLogo"
      />
      <h1 className="header">Weather Forecast</h1>
    </div>
  );
}
