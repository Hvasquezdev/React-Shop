import React from "react";
import "./../../assets/styles/atoms/Input.scss";

function Input({
  placeholder = "",
  type = "text",
  className = "",
  value = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      className={`input ${className}`}
    />
  );
}

export default Input;
