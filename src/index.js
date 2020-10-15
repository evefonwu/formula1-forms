import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

// Define cascading styles - source order matters
import "normalize.css";
import "./styles/index.css";

// Router
import { BrowserRouter } from "react-router-dom";

// Wrap application with BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
