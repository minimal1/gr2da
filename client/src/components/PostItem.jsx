/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import PostDetail from "./PostDetail";

const ItemContent = styled.div`
  margin-top: 10px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 500;
  color: #2f2f2f;
  h5 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  span {
    color: #818181;
  }
`;

const ItemImage = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 5px;
  background: ${(props) => (props.src ? `url(${props.src})` : "#F5F6F7")};
  background-position: center;
  background-size: cover;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

function PostItem({ item }) {
  const { fileUrl: src, title, creator, _id } = item;
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

  return (
    <>
      <Item onClick={openModal}>
        <ItemImage src={src} />
        <ItemContent>
          <h5>{title}</h5>
          <Link to={`/profiles/${creator._id}`}>
            <span>{creator.name}</span>
          </Link>
        </ItemContent>
      </Item>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <PostDetail close={closeModal} postId={_id} />
      </Modal>
    </>
  );
}

export default PostItem;
