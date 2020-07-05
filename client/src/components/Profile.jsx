/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import EditProfile from "./EditProfile";

const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #707070;
`;

const Content = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;

  .username {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 15px;
  }
  .email {
    font-size: 16px;
    font-weight: 300;
  }
`;

const ContentRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  .nickname {
    font-size: 30px;
  }

  button {
    margin-left: 30px;
    padding: 5px 10px;
    border: 1px solid #707070;
  }
`;

function Profile({ user, isMe }) {
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
    <UserProfile>
      <Avatar src={user.avatarUrl} />
      <Content>
        <ContentRow>
          <span className='nickname'>{user.nickname}</span>
          {isMe ? (
            <div>
              <button onClick={openModal}>프로필 수정</button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <EditProfile close={closeModal} />
              </Modal>
            </div>
          ) : null}
        </ContentRow>
        <span className='username'>{user.name}</span>
        <span className='email'>{user.email}</span>
      </Content>
    </UserProfile>
  );
}

export default Profile;
