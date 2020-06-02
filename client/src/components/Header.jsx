/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import routes from "../routes";
import styled from "styled-components";
import { observer, inject } from "mobx-react";

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;

// store 읽어서 login & logout & user 정보

function Header({ user }) {
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
          {user && user.logged ? (
            <>
              <li className='header__link'>
                <Link to='/me'>
                  <Avatar src={user.loggedUser.avatarUrl} alt='Avatar' />
                </Link>
              </li>
              <li className='header__link'>
                <button onClick={user.logout}>Logout</button>
              </li>
            </>
          ) : (
            <li className='header__link'>
              <button onClick={user.login}>
                <img
                  src='/image/kakao_login_btn_simple_small.png'
                  alt='Kakao Login'
                />
              </button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default inject(({ user }) => ({
  user,
}))(observer(Header));
