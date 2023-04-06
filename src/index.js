/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const token = localStorage?.getItem("token");
root.render(
  <React.StrictMode>
    <div>{token ? <App /> : <Login />}</div>
  </React.StrictMode>
);
