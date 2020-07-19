/** @format */

import * as React from "react";
import routes from "../routes";
import styled from "styled-components";
import { useLocalStore, observer, useObserver } from "mobx-react";
import Axios from "axios";
import { useStores } from "../stores";

function useUserStores() {
  const { user } = useStores();

  return useObserver(() => ({
    loggedUser: user.loggedUser,
  }));
}

const Upload = observer(({ close, history }) => {
  const { loggedUser } = useUserStores();

  const localStore = useLocalStore(() => ({
    title: "",
    paintFile: undefined,
    preview: undefined,
  }));

  const placeHolder = "작품 제목을 입력해주세요";

  const handleChange = (event) => {
    event.preventDefault();
    localStore.title = event.target.value;
  };

  const handlePreview = (event) => {
    event.preventDefault();

    if (event.target.files[0]) {
      const fileReader = new FileReader();
      localStore.paintFile = event.target.files[0];

      fileReader.onloadend = () => {
        localStore.preview = fileReader.result;
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    uploadPost()
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Error on uploading");
        } else {
          close(true);
        }
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
      });
  };

  const uploadPost = () => {
    const url = routes.upload;
    const formData = new FormData();
    formData.append("title", localStore.title);
    formData.append("paintFile", localStore.paintFile);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return Axios.post(url, formData, config);
  };

  return (
    <UploadModal>
      <header>
        <button onClick={close}>
          <i className='fas fa-times'></i>
        </button>
        <h5>게시물 만들기</h5>
        <button onClick={handleSubmit}>게시</button>
      </header>
      <User>
        <img src={loggedUser.avatarUrl} alt={loggedUser.nickname} />
        <span>{loggedUser.nickname}</span>
      </User>
      <form>
        <InputContents>
          <input
            type='text'
            name='title'
            value={localStore.title}
            placeholder={placeHolder}
            onChange={handleChange}
          />
          <label>
            사진파일
            <input
              type='file'
              name='paintFile'
              onChange={handlePreview}
              accept='image/*'
            />
          </label>
        </InputContents>
      </form>
      <Preview src={localStore.preview}>
        {localStore.preview ? "" : "사진 업로드"}
      </Preview>
    </UploadModal>
  );
});

const UploadModal = styled.div`
  border-radius: 10px;
  width: 500px;
  font-size: 16px;

  header {
    width: 100%;
    background-color: rgb(166, 211, 247);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    /* border-bottom: 1px solid #818181; */
    box-shadow: 0px 1px 10px 0px #a7a7a7;
    margin-bottom: 10px;

    h5 {
      font-weight: 500;
      color: #818181;
    }
    button {
      font-weight: 500;
      text-decoration: none;

      color: rgba(47, 47, 47, 1);

      &:hover {
        color: rgba(47, 47, 47, 0.7);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
  }
`;

const User = styled.div`
  margin: 10px 20px;
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #707070;
  }
  span {
    font-weight: 600;
    font-size: 14px;
  }
`;

const InputContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  input[type="text"] {
    padding: 10px 20px;
    width: 280px;
    background-color: white;
    border: 1px solid #f1f1f1;

    &::placeholder {
      color: rgb(185, 196, 233);
    }

    &:active,
    &:focus {
      outline: none;
    }
  }

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
    input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      overflow: hidden;
    }
  }
`;

const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin: 10px 20px;
  padding: 5px;
  height: 280px;
  border: 1px solid rgb(166, 211, 247);
  background: ${(props) => (props.src ? `url(${props.src})` : "#F5F6F7")};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export default Upload;
