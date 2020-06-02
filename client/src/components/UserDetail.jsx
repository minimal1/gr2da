/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { observer, inject } from "mobx-react";

import routes from "../routes";
import styled from "styled-components";
import Upload from "./Upload";
import Loading from "./Loading";
import Profile from "./Profile";
import PostList from "./PostList";

const Button = styled.button`
  font-size: 16px;
  margin-top: 15px;
  align-self: flex-end;
`;

const Posts = styled.section`
  border-top: 1px solid grey;
  width: 100%;
  padding-top: 15px;
  margin-top: 15px;
`;

function UserDetail({ match, history, loggedUser, logged }) {
  const id = match.params.id || (logged ? loggedUser.id : -1);
  const isMe = logged && id === loggedUser.id;
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "25%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      boxShadow:
        "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12)",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${routes.profiles}/${id}`)
      .then((res) => {
        if (res.status === 200) {
          // user information - email, nickname name, avatarUrl, posts
          setUser(res.data);
        } else throw new Error("Failed to authenticate user");
      })
      .catch((error) => {
        console.log(error);
        history.push("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, history]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Profile user={user} isMe={isMe} />
      {isMe ? (
        <>
          <Button onClick={openModal}>업로드</Button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <Upload close={closeModal} avatarUrl={user.avatarUrl} />
          </Modal>
        </>
      ) : null}
      <Posts>
        <PostList posts={user.posts} />
      </Posts>
    </>
  );
}

export default inject(({ user }) => ({
  logged: user.logged,
  loggedUser: user.loggedUser,
}))(observer(UserDetail));
