/** @format */

import React, { useState, useEffect } from "react";
import MainPageTemplete from "./MainPageTemplete";
import Header from "./Header";
import Banner from "./Banner";
import PostList from "./PostList";
import axios from "axios";

function MainPage({ location, history }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("/auth/login/success")
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setIsAuthenticated(true);
        } else throw new Error("Failed to authenticate user");
      })
      .catch((error) => {
        setUser(null);
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <MainPageTemplete
      header={<Header user={user} isAuthenticated={isAuthenticated} />}
      banner={<Banner />}
      postList={<PostList />}
    />
  );
}

export default MainPage;
