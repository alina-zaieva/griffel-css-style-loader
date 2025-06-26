import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import React from "react";

const rootElement = document.getElementById("app");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />)
}