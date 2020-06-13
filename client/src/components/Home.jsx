/** @format */

import React, { useState, useEffect } from "react";
import HomeTemplete from "./HomeTemplete";
import Banner from "./Banner";
import PostList from "./PostList";
import axios from "axios";
import Loading from "./Loading";
import routes from "../routes";

function Home({ location, history }) {
  const [posts, setPosts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // 일단 react hook으로 데이터 얻어오기
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(routes.posts)
      .then(({ status, data }) => {
        if (status === 200) setPosts(data);
        else throw new Error("Error in getting posts for Home");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <HomeTemplete
      banner={<Banner />}
      followingList={<PostList posts={posts} />}
    />
  );
}

export default Home;
