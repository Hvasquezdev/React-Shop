import React from "react";
import "./../assets/styles/Login.scss";

import yardSaleLogo from "./../assets/logos/logo_yard_sale.svg";
import Input from "./../components/atoms/Input";
import Label from "./../components/atoms/Label";

function Login() {
  return (
    <div className="login">
      <div className="form-container">
        <img src={yardSaleLogo} alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <form action="/" className="form">
          <Label htmlFor="password">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="*********"
            className="input-password"
          />

          <Label htmlFor="new-password">
            Repeat password
          </Label>
          <Input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input-password"
          />

          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
