import React from "react";
import "./index.css";
// import HomePage from "./pages/Home/HomePage";
import ListPage from "./pages/Home/ListPage";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ListPage tab="list" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
