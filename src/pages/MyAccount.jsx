import React from "react";
import "./../assets/styles/pages/MyAccount.scss";

import Title from "../components/atoms/Title";
import Form from "../components/molecules/Form";
import FormContainer from "../components/atoms/FormContainer";
import FormField from "../components/molecules/FormField";
import Button from "../components/atoms/Button";

function MyAccount() {
  return (
    <div className="my-account">
      <FormContainer>
        <Title fullWidth>My account</Title>

        <Form
          action="/"
          formFields={() => (
            <>
              <FormField id="name" label="Name" inputPlaceholder="Hector" />
              <FormField
                id="email"
                label="Email"
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
              Create
            </Button>
          )}
        />
      </FormContainer>
    </div>
  );
}

export default MyAccount;
