/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PostItem from "./PostItem";
import routes from "../routes";

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: calc((80vw - (25px * 4)) / 5);
  grid-gap: 25px;
`;

function PostList() {
  // get post data from mobx
  const [isLoading, setIsLoading] = useState(true);
  const [itemList, setItemList] = useState([]);

  // 일단 react hook으로 데이터 얻어오기
  useEffect(() => {
    setIsLoading(true);
    async function fetchPosts() {
      await axios
        .get(routes.posts)
        .then(({ status, data }) => {
          if (status === 200) {
            setItemList(
              data.map((item) => <PostItem item={item} key={item._id} />)
            );
            setIsLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
    fetchPosts();
  }, []);

  return isLoading ? "Loading..." : <List>{itemList}</List>;
}

export default PostList;
