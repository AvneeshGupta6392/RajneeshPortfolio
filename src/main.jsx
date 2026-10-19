import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css"; import "./styles/navbar.css"; import "./styles/home.css"; import "./styles/about.css";
import "./styles/approach.css"; import "./styles/products.css"; import "./styles/gallery.css";
import "./styles/contact.css"; import "./styles/connect.css";
createRoot(document.getElementById("root")).render(<BrowserRouter><App /></BrowserRouter>);
