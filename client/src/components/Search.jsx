/** @format */

import React from "react";

function Search() {
  return (
    <form className='search-form'>
      <i className='fas fa-search'></i>
      <input
        type='text'
        className='search-form__keyword'
        placeholder='검색어를 입력하세요.'
      />
    </form>
  );
}

export default Search;
