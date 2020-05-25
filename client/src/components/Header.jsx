/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Search from "./Search";
import Upload from "./Upload";
import routes from "../routes";
import styled from "styled-components";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;

function Header({ user, isAuthenticated }) {
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
  return (
    <header className='header'>
      <div className='header__column'>
        <Link to='/'>
          <h1 className='header__title'>GR2DA</h1>
        </Link>
      </div>
      <div className='header__column'>
        <Search />
      </div>
      <div className='header__column'>
        <ul className='header__links'>
          <li className='header__link'>
            <Link to='/'>그리다 소개</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className='header__link'>
                <button className='header__button' onClick={openModal}>
                  업로드
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                >
                  <Upload close={closeModal} avatarUrl={user.avatarUrl} />
                </Modal>
              </li>
              <li className='header__link'>
                <Link to='/me'>
                  <Avatar src={user.avatarUrl} alt='Avatar' />
                </Link>
              </li>
              <li className='header__link'>
                <a href={routes.logout}>Logout</a>
              </li>
            </>
          ) : (
            <li className='header__link'>
              <a href={routes.kakao}>
                <img
                  src='/image/kakao_login_btn_simple_small.png'
                  alt='Kakao Login'
                />
              </a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
