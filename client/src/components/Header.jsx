/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Search from "./Search";
import UploadForm from "./UploadForm";

if (process.env.NODE_ENV !== 'test') Modal.setAppElement("#root");

function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
          <li className='header__link'>
            <button className='header__button' onClick={openModal}>
              업로드
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
              <UploadForm close={closeModal} />
            </Modal>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
