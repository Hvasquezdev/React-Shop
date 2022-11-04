import React from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import "./assets/styles/global.scss";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
