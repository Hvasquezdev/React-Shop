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
}) {
  const fieldId = () => {
    if (id) return id;
    if (!label) return "";

    return label.split(" ").join("_");
  };

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
      />
    </div>
  );
}

export default FormField;
