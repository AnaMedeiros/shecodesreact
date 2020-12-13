import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <div className="secondHeader">
      <img
        className="sheCodesReactLogo"
        src="https://www.shecodes.io/assets/products/logos/react-bdcb55adddce8fd811946f5e2f6f32ec3116a79b8c503323b703802700f19131.png"
        alt="SheCodesReactLogo"
      />
      <h1 className="header">Weather Forecast</h1>
    </div>
  );
}
