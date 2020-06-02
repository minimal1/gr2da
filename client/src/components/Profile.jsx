/** @format */

import React from "react";
import styled from "styled-components";

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
  return (
    <UserProfile>
      <Avatar src={user.avatarUrl} />
      <Content>
        <ContentRow>
          <span className='nickname'>{user.nickname}준비중</span>
          {isMe ? <button>프로필 수정</button> : null}
        </ContentRow>
        <span className='username'>{user.name}</span>
        <span className='email'>{user.email}</span>
      </Content>
    </UserProfile>
  );
}

export default Profile;
