/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import routes from "../routes";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { inject, observer } from "mobx-react";
import EditPostItem from "./EditPostItem";
import Modal from "react-modal";

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

function PostDetail({ close, postId, logged, loggedUser }) {
  const [item, setItem] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
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
      // boxShadow:
      //   "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12)",
    },
  };

  const handleEdit = (event) => {
    // close();
    openModal();
  };

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
        {logged && loggedUser.id === item.creator._id ? (
          <div>
            <button id='edit' onClick={handleEdit}>
              Edit
            </button>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <EditPostItem id={postId} close={closeModal} />
            </Modal>
          </div>
        ) : null}
      </Contents>
    </PostModal>
  ) : (
    <Loading />
  );
}

export default inject(({ user }) => ({
  logged: user.logged,
  loggedUser: user.loggedUser,
}))(observer(PostDetail));
