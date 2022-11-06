import React from "react";
import "./../assets/styles/pages/MyAccount.scss";

import Title from "../components/atoms/Title";
import Form from "../components/molecules/Form";
import FormContainer from "../components/atoms/FormContainer";
import FormField from "../components/molecules/FormField";
import Button from "../components/atoms/Button";

function MyAccount() {
  const [name, setName] = React.useState("Hector Vasquez");
  const [email, setEmail] = React.useState("hvasquezdev@gmail.com");
  const [password, setPassword] = React.useState("123456789");
  const [editing, setEditing] = React.useState(false);

  return (
    <div className="my-account">
      <FormContainer>
        <Title fullWidth>My account</Title>

        <Form
          action="/"
          formFields={() => (
            <>
              <FormField
                id="name"
                label="Name"
                inputPlaceholder="Hector"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={!editing}
                plainText={!editing}
              />
              <FormField
                id="email"
                label="Email"
                inputType="email"
                inputPlaceholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!editing}
                plainText={!editing}
              />
              <FormField
                id="password"
                label="Password"
                inputType="password"
                inputPlaceholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                readOnly={!editing}
                plainText={!editing}
              />
            </>
          )}
          formActions={() =>
            editing && (
              <Button type="submit" color="primary">
                Create
              </Button>
            )
          }
        />

        {!editing && (
          <Button color="primary" outlined onClick={() => setEditing(true)}>
            Edit
          </Button>
        )}
      </FormContainer>
    </div>
  );
}

export default MyAccount;
