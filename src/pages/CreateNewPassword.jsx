import React from "react";
import "./../assets/styles/CreateNewPassword.scss";

import yardSaleLogo from "./../assets/logos/logo_yard_sale.svg";
import Button from "../components/atoms/Button";
import Form from "../components/molecules/Form";
import FormField from "../components/molecules/FormField";

function CreateNewPassword() {
  return (
    <div className="create-new-password">
      <div className="form-container">
        <img src={yardSaleLogo} alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <Form
          action="/"
          formFields={() => (
            <>
              <FormField
                label="Password"
                id="password"
                inputType="password"
                inputPlaceholder="*********"
              />
              <FormField
                label="Repeat password"
                id="new-password"
                inputType="password"
                inputPlaceholder="*********"
              />
            </>
          )}
          formActions={() => (
            <Button type="submit" className="login-button" color="primary">
              Confirm
            </Button>
          )}
        >
        </Form>
      </div>
    </div>
  );
}

export default CreateNewPassword;
