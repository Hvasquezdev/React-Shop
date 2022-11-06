import React from "react";
import "./../assets/styles/RecoveryPassword.scss";

import logo from "./../assets/logos/logo_yard_sale.svg"
import emailIcon from "./../assets/icons/email.svg";
import Button from "./../components/atoms/Button";

function RecoveryPassword() {
  return (
    <div className="recovery-password">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />

        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className="email-image">
          <img src={emailIcon} alt="email" />
        </div>

        <Button className="login-button" color="primary">Login</Button>

        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}

export default RecoveryPassword;
