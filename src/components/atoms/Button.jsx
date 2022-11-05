import React from "react";
import "./../../assets/styles/atoms/Button.scss";

function Button({ children, type = "button", className = "", color = "" }) {
  const buttonColor = () => {
    const colors = {
      primary: "button--primary",
    };

    return colors[color] || "";
  };

  return (
    <button type={type} className={`button ${className} ${buttonColor()}`}>
      {children}
    </button>
  );
}

export default Button;
