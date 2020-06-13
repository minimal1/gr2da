/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import routes from "../routes";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const PostModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 700px;
  height: 500px;
  color: black;
  overflow: hidden;
`;

const PostImg = styled.div`
  background: ${(props) => (props.src ? `url(${props.src})` : "#F5F6F7")};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 500px;
  border-right: 1px solid black;
`;

const Contents = styled.div`
  width: 200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  h5 {
    font-size: 24px;
    /* border-bottom: 1px solid black; */
    padding: 10px;
    margin-bottom: 5px;
  }
  .author {
    display: flex;
    align-items: center;
    font-size: 18px;
    border-bottom: 1px solid black;
    padding: 10px;
    margin-bottom: 5px;
  }
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
`;

function PostDetail({ postId }) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    axios
      .get(`${routes.posts}/${postId}`)
      .then(({ status, data }) => {
        if (status === 200) setItem(data);
        else throw new Error("Error in getting posts for Home");
      })
      .catch((err) => console.log(err));
  }, [postId]);

  return item ? (
    <PostModal>
      <PostImg src={item.fileUrl} />
      <Contents>
        <Link to={`/profiles/${item.creator._id}`}>
          <div className='author'>
            <Avatar src={item.creator.avatarUrl} alt='Avatar' />
            <span>{item.creator.name}</span>
          </div>
        </Link>
        <h5>{item.title}</h5>
      </Contents>
    </PostModal>
  ) : (
    <Loading />
  );
}

export default PostDetail;
