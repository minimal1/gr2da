/** @format */

import React, { Component } from "react";
import "./style/styles.css";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import UserDetail from "./components/UserDetail";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/about' component={MainPage} />
        <Route path='/me' component={UserDetail} />
        <Route path='/profiles/:id' component={UserDetail} />
      </Switch>
    );
  }
}

export default App;
