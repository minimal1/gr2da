/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Header() {
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
            <button className='header__button'>업로드</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
