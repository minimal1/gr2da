/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import routes from "../routes";
import styled from "styled-components";
import PostItem from "./PostItem";

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  margin-left: 50px;
`;

const Posts = styled.section``;
const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: calc((80vw - (25px * 4)) / 5);
  grid-gap: 25px;
`;

const loggedUser = {
  id: "5ec2c99c86b7d43adb607c8b",
  email: "jcm940308@gmail.com",
  name: "HI",
  avatarUrl: "",
};

function UserDetail({ match }) {
  const id = match.params.id || loggedUser.id;
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`${routes.profiles}/${id}`)
      .then((res) => {
        if (res.status === 200) {
          // user information - email, name, avatarUrl, posts
          setUser(res.data);
        } else throw new Error("Failed to authenticate user");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className='topContainer'>
      <Profile>
        <Avatar src={user.avatarUrl} />
        <Content>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </Content>
      </Profile>
      <Posts>
        <List>
          {user.posts
            ? user.posts.map((item) => <PostItem item={item} key={item._id} />)
            : null}
        </List>
      </Posts>
    </div>
  );
}

export default UserDetail;
