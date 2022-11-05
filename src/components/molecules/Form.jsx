import React from "react";
import "./../../assets/styles/molecules/Form.scss";

function Form({ action = "", formFields, formActions }) {
  return (
    <form action={action} className="form">
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
