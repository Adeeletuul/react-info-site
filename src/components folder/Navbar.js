import React from "react";
import reactLogo from "../images/React-icon.png";

export default function Navbar(props) {
  return (
    <nav>
      <img className="nav-icon" alt="" src={reactLogo} />
      <h3 className="nav-logo_text">ReactFacts</h3>
      <label className="switch">
        <input type="checkbox" onClick={props.toggleTheme} />
        <span className="slider round"></span>
      </label>
    </nav>
  );
}
