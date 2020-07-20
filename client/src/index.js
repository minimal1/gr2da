/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MobXProviderContext } from "mobx-react";
import RootStore from "./stores";

const root = new RootStore();

ReactDOM.render(
  <MobXProviderContext.Provider value={root}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MobXProviderContext.Provider>,
  document.getElementById("root")
);
