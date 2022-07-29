import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import "./Styles/queries.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { ValuesContextProvider } from "./store/values-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ValuesContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </ValuesContextProvider>
);
