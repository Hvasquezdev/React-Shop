import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Layout from "./../containers/Layout";
import CreateNewPassword from "../pages/CreateNewPassword";
import RecoveryPassword from "./../pages/RecoveryPassword";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-password" element={<CreateNewPassword />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
