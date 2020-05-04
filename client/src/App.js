/** @format */

import React, { Component } from "react";
import "./style/styles.css";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={MainPage} />
      </Switch>
    );
  }
}

export default App;
