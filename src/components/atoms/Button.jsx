import React from "react";
import "./../../assets/styles/atoms/Button.scss";

function Button({
  children,
  type = "button",
  className = "",
  color = "",
  outlined = false,
  onClick,
}) {
  const outlinedClass = outlined ? "-outlined" : "";
  const buttonColor = color ? `button--${color}${outlinedClass}` : "";

  return (
    <button type={type} className={`button ${className} ${buttonColor}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
