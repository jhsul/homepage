import React from "react";
import ReactDOM from "react-dom/client";

import { GeistProvider, CssBaseline } from "@geist-ui/core";

import App from "./components/App";

import "./styles.scss";

// Set --scroll variable
window.addEventListener(
  "scroll",
  () => {
    const scroll =
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight);

    console.log(`Scroll ${scroll.toFixed(2)}`);
    document.body.style.setProperty("--scroll", scroll.toString());
  },
  false
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
