import React from "react";
import "./../../assets/styles/atoms/Input.scss";

function Input({
  placeholder = "",
  type = "text",
  className = "",
  value = "",
  id = ""
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      id={id}
      className={`input ${className}`}
    />
  );
}

export default Input;
