/** @format */

import React from "react";
import MainPageTemplete from "./MainPageTemplete";
import Header from "./Header";
import Banner from "./Banner";

function MainPage({ location, history }) {
  return <MainPageTemplete header={<Header />} banner={<Banner />} />;
}

export default MainPage;
