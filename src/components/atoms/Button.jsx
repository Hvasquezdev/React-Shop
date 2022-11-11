import React from "react";
import { getStringFromObjectKeys } from "../../utils";
import "./../../assets/styles/atoms/Button.scss";

function Button({
  children,
  type = "button",
  className = "",
  color = "",
  outlined = false,
  onClick,
  isIconButton = false,
}) {
  const outlinedClass = outlined ? "-outlined" : "";
  const classNames = getStringFromObjectKeys({
    [`button--${color}${outlinedClass}`]: color,
    "button--outlined": outlined,
    "button--icon-button": isIconButton,
  });

  return (
    <button
      type={type}
      className={`button ${className} ${classNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
