/** @format */

import React, { useState } from "react";
import routes from "../routes";
import styled from "styled-components";

const UploadModal = styled.div`
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

    button {
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

function Upload({ close }) {
  const [preview, setPreview] = useState(null);

  const handlePreview = (event) => {
    event.preventDefault();

    const fileReader = new FileReader();
    const file = event.target.files[0];

    fileReader.onloadend = () => {
      console.log(fileReader.result);
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <UploadModal>
      <header>
        <h5>업로드</h5>
        <button onClick={close}>
          <i className='fas fa-times'></i>
        </button>
      </header>
      <form action={routes.upload} method='post' encType='multipart/form-data'>
        <Title>
          <span>제목</span>
          <input type='text' name='title' />
        </Title>
        <Image>
          <span>파일</span>
          <Preview src={preview} />
          <label>
            사진파일
            <input
              type='file'
              id='paintFile'
              onChange={handlePreview}
              accept='image/*'
            />
          </label>
        </Image>
        <button>게시</button>
      </form>
    </UploadModal>
  );
}

export default Upload;
