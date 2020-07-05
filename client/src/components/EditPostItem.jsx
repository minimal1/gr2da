/** @format */

import React, { useState, useEffect } from "react";
import routes from "../routes";
import styled from "styled-components";
import Axios from "axios";
import Loading from "./Loading";

const PostEditModal = styled.div`
  border-radius: 15px;
  width: 500px;
  font-size: 16px;
  position: relative;
  padding: 0 10px;

  header {
    background-color: white;
    top: 0px;
    left: 0px;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 1px solid #818181;
    background-color: #f5f6f7;

    h5 {
      font-weight: 600;
    }
    button {
      color: rgba(47, 47, 47, 0.5);

      &:hover {
        color: rgba(47, 47, 47);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 15px;
    padding-top: 45px;

    button,
    a {
      text-align: center;
      color: white;
      margin-top: 15px;
      padding: 7px 0;
      width: 100%;
      background-color: rgb(166, 211, 247);
      border-radius: 10px;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  span {
    margin-right: 20px;
  }

  input[type="text"] {
    font-size: 14px;
    padding: 5px 5px;
    width: 280px;
    background-color: #f5f6f7;
    border: 1px solid #818181;
    border-radius: 5px;

    &:active,
    &:focus {
      outline: none;
    }
  }
`;

const Image = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;

  label {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100px;
    height: 30px;
    background-color: #f5f6f7;
    border-radius: 20px;
    &:hover {
      background-color: #e1e2e3;
    }
    input {
      position: absolute;
      width: 0;
      height: 0;
      overflow: hidden;
    }
  }
`;

const Preview = styled.div`
  margin: 0 20px;
  width: 280px;
  height: 280px;
  border: 1px solid #818181;
  border-radius: 5px;
  background: ${(props) => (props.src ? `url(${props.src})` : "#F5F6F7")};
  background-position: center;
  background-size: cover;
`;

function EditPostItem({ close, id }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    Axios.get(`${routes.posts}/${id}/edit`)
      .then(({ status, data }) => {
        console.log(data);
        if (status === 200) setItem(data);
        else throw Error("Server Error");
      })
      .catch((err) => close());
  }, []);

  return item ? (
    <PostEditModal>
      <header>
        <h5>작품 수정</h5>
        <button onClick={close}>
          <i className='fas fa-times'></i>
        </button>
      </header>
      <form action={`${routes.posts}/${id}/edit`} method='post'>
        <Title>
          <span>제목</span>
          <input type='text' name='title' placeholder={item.title} />
        </Title>
        <Image>
          <span>작품</span>
          <Preview src={item.fileUrl} />
        </Image>
        <button>수정</button>
        <a href={`${routes.posts}/${id}/delete`}>삭제</a>
      </form>
    </PostEditModal>
  ) : (
    <Loading />
  );
}

export default EditPostItem;
