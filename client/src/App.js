/** @format */

import * as React from "react";
import "./style/styles.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";
import Header from "./components/Header";
import { observer } from "mobx-react";
import { useStores } from "./stores";

const App = observer(() => {
  const { user } = useStores();
  // 로그인 여부 확인

  React.useEffect(() => {
    user.sessionCheck();
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
});

export default App;
