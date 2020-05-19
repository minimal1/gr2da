/** @format */

import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 50px 0px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  margin-bottom: 30px;
  margin-left: 30px;
  font-size: 24px;
  font-weight: 600;
`;

function MainPageTemplete({ header, banner, postList }) {
  return (
    <div className='topContainer'>
      {header}
      {banner}
      <Section>
        <SectionTitle>꿈을 그리다</SectionTitle>
        {postList}
      </Section>
    </div>
  );
}

export default MainPageTemplete;
