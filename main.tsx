import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { builder } from "@builder.io/react";

builder.init(import.meta.env.VITE_BUILDER_API_KEY);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
