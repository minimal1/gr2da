/** @format */

import React from "react";

function MainPageTemplete({ header, banner, postList }) {
  console.log(header, banner, postList);
  return (
    <div className='topContainer'>
      {header}
      {banner}
      <h4>꿈을 그리다</h4>
      {postList}
    </div>
  );
}

export default MainPageTemplete;
