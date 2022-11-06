import React from "react";
import "./../assets/styles/pages/Login.scss";

import yardSaleLogo from "./../assets/logos/logo_yard_sale.svg";
import Form from "../components/molecules/Form";
import FormContainer from "../components/atoms/FormContainer";
import FormField from "../components/molecules/FormField";
import Button from "../components/atoms/Button";

function Login() {
  return (
    <div className="login">
      <FormContainer className="form-container">
        <img src={yardSaleLogo} alt="logo" className="logo" />

        <Form
          action="/"
          formFields={() => (
            <>
              <FormField
                id="email"
                label="Email address"
                inputType="email"
                inputPlaceholder="email@example.com"
              />
              <FormField
                id="password"
                label="Password"
                inputType="password"
                inputPlaceholder="*********"
              />
            </>
          )}
          formActions={() => (
            <Button type="submit" color="primary">
              Log in
            </Button>
          )}
        ></Form>

        <Button color="link" className="forgot-password-button">
          Forgot my password
        </Button>

        <Button color="primary" className="signup-button" outlined>
          Sign up
        </Button>
      </FormContainer>
    </div>
  );
}

export default Login;
