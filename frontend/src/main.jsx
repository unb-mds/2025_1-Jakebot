import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/dashboard/App";
import "./index.css"; // importa Tailwind
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);
