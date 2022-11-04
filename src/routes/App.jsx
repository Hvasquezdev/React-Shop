import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Layout from "./../containers/Layout";
import Login from "./../containers/Login";
import RecoveryPassword from "./../containers/RecoveryPassword";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<p>Home Page</p>} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
