/** @format */

import React from "react";
import styled from "styled-components";

const Spinnet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  font-weight: 600;
`;

function Loading() {
  return <Spinnet>Loading...</Spinnet>;
}

export default Loading;
