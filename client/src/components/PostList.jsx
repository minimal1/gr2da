/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PostItem from "./PostItem";
import routes from "../routes";

const List = styled.div`
  width: 955px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 175px);
  grid-auto-rows: 225px;
  column-gap: 20px;
  row-gap: 20px;
`;

function PostList({ posts }) {
  // get post data from mobx
  const itemList = posts.map((item) => <PostItem item={item} key={item._id} />);
  return <List>{itemList}</List>;
}

export default PostList;
