/** @format */

import React from "react";
import styled from "styled-components";

const ItemContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #2f2f2f;
  opacity: 0;

  span {
    display: block;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      url(${(props) => props.src});
    ${ItemContent} {
      opacity: 1;
    }
  }
`;

function PostItem({ item }) {
  const { fileUrl: src, title } = item;

  return (
    <Item src={src}>
      <ItemContent>
        <span>{title}</span>
        {/* <span>{userName}</span> */}
      </ItemContent>
    </Item>
  );
}

export default PostItem;
