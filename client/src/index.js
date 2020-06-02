/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import { Provider } from "mobx-react";
import RootStore from "./stores";

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
