/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { observer, inject, useObserver } from "mobx-react";

import routes from "../routes";
import styled from "styled-components";
import Upload from "./Upload";
import Loading from "./Loading";
import Profile from "./Profile";
import PostList from "./PostList";
import { useStores } from "../stores";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.6)";

function useUserStores() {
  const { user } = useStores();

  return useObserver(() => ({
    loggedUser: user.loggedUser,
    logged: user.logged,
  }));
}

const UserDetail = observer(({ match, history }) => {
  const { loggedUser, logged } = useUserStores();

  const id = match.params.id || (logged ? loggedUser.id : -1);
  const isMe = logged && id === loggedUser.id;
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (uploaded) => {
    if (uploaded) {
      setUploaded(uploaded);
    }
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      borderRadius: "10px",
      // boxShadow:
      //   "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12)",
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
        setUploaded(false);
      });
  }, [id, uploaded, history]);

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
            <Upload
              close={closeModal}
              avatarUrl={user.avatarUrl}
              history={history}
            />
          </Modal>
        </>
      ) : null}
      <Posts>
        <PostList posts={user.posts} />
      </Posts>
    </>
  );
});

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
export default UserDetail;
