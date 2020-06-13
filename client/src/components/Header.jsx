/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import routes from "../routes";
import styled from "styled-components";
import { observer, inject } from "mobx-react";

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

// store 읽어서 login & logout & user 정보
function Header({ user }) {
  return user ? (
    <div className='header__wrapper'>
      <header className='header'>
        <div className='header__column'>
          <ul className='header__links'>
            <li className='header__link'>
              <Link to='/'>
                <img className='logo' src='/image/logo1.png' alt='GR2DA logo' />
              </Link>
            </li>
            <li className='header__link'>
              <Link to='/'>
                <span>둘러보기</span>
              </Link>
            </li>
            <li className='header__link'>
              <Link to='/'>
                <span>보관함</span>
              </Link>
            </li>
            <li className='header__link'>
              <Link to='/'>
                <span>이용권</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className='header__column'>
          <Search />
        </div>
        <div className='header__column'>
          <ul className='header__links'>
            <li className='header__link'>
              <Link to='/'>그리다 소개</Link>
            </li>
            {user.logged ? (
              <>
                <li className='header__link'>
                  <button onClick={user.logout}>Logout</button>
                </li>
                <li className='header__link'>
                  <Link to='/me'>
                    <Avatar src={user.loggedUser.avatarUrl} alt='Avatar' />
                  </Link>
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
    </div>
  ) : (
    <>GR2DA</>
  );
}

export default inject(({ user }) => ({
  user,
}))(observer(Header));
