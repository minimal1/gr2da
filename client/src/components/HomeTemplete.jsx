/** @format */

import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 25px 0px;
  width: 100%;
`;

const SplitSection = styled.section`
  margin: 50px 0px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  padding-bottom: 7px;
  padding-left: 30px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
  i {
    font-size: 16px;
    margin-left: 5px;
    cursor: pointer;
  }
`;

function MainPageTemplete({
  banner,
  followingList,
  lastestList,
  recommendList,
}) {
  return (
    <>
      {banner}
      <Section>
        <SectionTitle>
          꿈을 그리다 <i className='fas fa-chevron-right'></i>
        </SectionTitle>
        {followingList}
      </Section>
      <SplitSection>
        <div>
          <SectionTitle>
            오늘을 그리다 <i className='fas fa-chevron-right'></i>
          </SectionTitle>
          {lastestList}
        </div>
        <div>
          <SectionTitle>
            요새 그리다 <i className='fas fa-chevron-right'></i>
          </SectionTitle>
          {recommendList}
        </div>
      </SplitSection>
    </>
  );
}

export default MainPageTemplete;
