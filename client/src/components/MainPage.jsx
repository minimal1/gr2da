/** @format */

import React from "react";
import MainPageTemplete from "./MainPageTemplete";
import Header from "./Header";
import Banner from "./Banner";
import PostList from "./PostList";

function MainPage({ location, history }) {
  return (
    <MainPageTemplete
      header={<Header />}
      banner={<Banner />}
      postList={<PostList />}
    />
  );
}

export default MainPage;
