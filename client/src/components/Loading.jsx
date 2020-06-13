/** @format */

import React from "react";
import styled from "styled-components";

const Spinnet = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 12%;
  }
`;

function Loading() {
  return (
    <Spinnet>
      <img src='/image/spinner.gif' alt='loading' />
    </Spinnet>
  );
}

export default Loading;
