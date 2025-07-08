import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/dashboard/App";
import "./index.css"; // importa Tailwind
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);
