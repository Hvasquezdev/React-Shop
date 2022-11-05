import React from "react";
import "./../../assets/styles/atoms/Label.scss";

function Label({ children, htmlFor = "", className = "" }) {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {children}
    </label>
  );
}

export default Label;
