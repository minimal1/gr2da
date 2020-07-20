/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import routes from "../routes";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { observer, useObserver } from "mobx-react";
import EditPostItem from "./EditPostItem";
import Modal from "react-modal";
import { useStores } from "../stores";
import Header from "./Header";

function useUserStores() {
  const { user } = useStores();

  return useObserver(() => ({
    loggedUser: user.loggedUser,
    logged: user.logged,
  }));
}

const PostDetail = observer(({ close, postId }) => {
  const { loggedUser, logged } = useUserStores();

  const [item, setItem] = useState(null);
  const [comment, setComment] = useState("");

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
    },
  };

  const handleEdit = (event) => {
    // close();
    openModal();
  };

  const handleChange = (event) => {
    event.preventDefault();

    const { value } = event.target;

    setComment(value);
  };

  const handleAddComment = (event) => {
    event.preventDefault();

    axios
      .post(`${routes.posts}/${postId}/comment`, {
        comment,
      })
      .then(({ status }) => {
        if (status === 400) throw new Error("Error in adding comment");
      })
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .get(`${routes.posts}/${postId}`)
          .then(({ status, data }) => {
            if (status === 200) setItem(data);
            else throw new Error("Error in getting posts for Home");
          })
          .catch((err) => console.log(err));
      })
      .finally(() => setComment(""));
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
        <header>
          <Introduction>
            <Link to={`/profiles/${item.creator._id}`}>
              <div className='author'>
                <Avatar src={item.creator.avatarUrl} alt='Avatar' />
                <span>{item.creator.name}</span>
              </div>
            </Link>
            <h5>{item.title}</h5>
          </Introduction>

          {logged && loggedUser.id === item.creator._id ? (
            <div>
              <button id='edit' onClick={handleEdit}>
                수정
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
        </header>

        <Comments>
          {item.comments.map((comment) => {
            return (
              <Comment key={comment._id}>
                <div className='author'>
                  <Avatar
                    size='big'
                    src={comment.creator.avatarUrl}
                    alt={comment.creator.nickname}
                  />
                  <span>{comment.creator.nickname}</span>
                </div>
                <span className='comment'>{comment.text}</span>
              </Comment>
            );
          })}
        </Comments>
        <SocialInfos></SocialInfos>
        <form onSubmit={handleAddComment}>
          <input
            type='text'
            name='comment'
            placeholder='댓글 달기...'
            value={comment}
            onChange={handleChange}
          />
          <button>게시</button>
        </form>
      </Contents>
    </PostModal>
  ) : (
    <Loading />
  );
});

const PostModal = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 750px;
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
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  position: relative;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 10px 20px;
  }

  form {
    width: 100%;
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    border: 1px solid #f1f1f1;

    input[type="text"] {
      font-size: 16px;
      background-color: white;
      border: none;

      &::placeholder {
        color: #818181;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      color: #818181;
    }
  }
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    font-size: 16px;
    margin-top: 5px;
  }

  .author {
    display: flex;
    align-items: center;
    font-size: 14px;

    span {
      text-decoration: underline;
    }
  }
`;

const Avatar = styled.img`
  width: ${(p) => (p.size === "big" ? "35px" : "25px")};
  height: ${(p) => (p.size === "big" ? "35px" : "25px")};
  border-radius: 50%;
  margin-right: 10px;
`;

const Comments = styled.div`
  padding: 15px;
  height: 300px;
  overflow: scroll;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  &::last-child {
    margin-bottom: 0px;
  }
  .author {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: 5px;

    span {
      font-size: 14px;
      font-weight: 500;
    }
  }
  .comment {
    color: #818181;
  }
`;

const SocialInfos = styled.div`
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

export default PostDetail;
