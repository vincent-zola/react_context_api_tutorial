// index.js exists because we render through it to our index.html

import React from "react";
import ReactDOM from "react-dom";
// import the component we want to render
import App from "./App";
import Context from "./Context";
import "./index.css";

// what we render in our index.html
ReactDOM.render(
    // wrap hole app in Context component
  <Context>
    <App />
  </Context>,
  document.querySelector("#root")
);
