import React from "react";
import "./../../assets/styles/atoms/Input.scss";

import { getStringFromObjectKeys } from "../../utils";

function Input({
  placeholder = "",
  type = "text",
  className = "",
  value = "",
  id = "",
  onChange,
  readOnly = false,
  plainText = false,
}) {
  const getClassNames = () =>
    getStringFromObjectKeys({
      "input--readonly": readOnly,
      "input--plain-text": plainText,
    });

  const handleOnChange = (e) => (onChange ? onChange(e) : null);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      className={`input ${className} ${getClassNames()}`}
      readOnly={readOnly}
      onChange={handleOnChange}
    />
  );
}

export default Input;
