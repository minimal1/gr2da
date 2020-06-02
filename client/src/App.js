/** @format */

import React, { Component, useEffect } from "react";
import "./style/styles.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";
import Header from "./components/Header";
import axios from "axios";
import { observer, inject } from "mobx-react";

function App({ sessionCheck }) {
  // 로그인 여부 확인

  useEffect(() => {
    sessionCheck();
  });

  return (
    <div className='topContainer'>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/about' component={Home} />
      <Route path='/me' component={UserDetail} />
      <Route path='/profiles/:id' component={UserDetail} />
    </div>
  );
}

export default inject(({ user }) => ({
  sessionCheck: user.sessionCheck,
}))(observer(App));
