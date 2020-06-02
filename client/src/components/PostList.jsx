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

function PostList({ posts }) {
  // get post data from mobx
  const itemList = posts.map((item) => <PostItem item={item} key={item._id} />);
  return <List>{itemList}</List>;
}

export default PostList;
