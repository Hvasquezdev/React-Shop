import React from "react";
import "./../../assets/styles/molecules/Form.scss";

function Form({ action = "", formFields, formActions, onSubmit }) {
  return (
    <form action={action} className="form" onSubmit={onSubmit}>
      <div className="form__fields">
        {formFields ? formFields() : ""}
      </div>
      <div className="form__actions">
        {formActions ? formActions() : ""}
      </div>
    </form>
  );
}

export default Form;
