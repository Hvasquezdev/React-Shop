import React from "react";
import "./../../assets/styles/molecules/FormField.scss";

import Label from "./../atoms/Label";
import Input from "./../atoms/Input";

function FormField({
  label = "",
  id = "",
  inputPlaceholder = "",
  inputType = "text",
  inputClassName = "",
  value = "",
  onChange,
  readOnly = false,
  plainText = false,
}) {
  const fieldId = () => {
    if (id) return id;
    if (!label) return "";

    return label.split(" ").join("_");
  };

  const handleOnChange = (e) => (onChange ? onChange(e) : null);

  return (
    <div className="form-field">
      {fieldId() && (
        <Label htmlFor={fieldId()} className="form-field__label">
          {label}
        </Label>
      )}
      <Input
        type={inputType}
        id={fieldId()}
        placeholder={inputPlaceholder}
        className={`form-field__input ${inputClassName}`}
        readOnly={readOnly}
        plainText={plainText}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default FormField;
