/** @format */

import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 50px 0px;
  width: 100%;
`;

const SplitSection = styled.section`
  margin: 50px 0px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const SectionTitle = styled.h2`
  padding-bottom: 15px;
  padding-left: 30px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 600;
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
        <SectionTitle>꿈을 그리다</SectionTitle>
        {followingList}
      </Section>
      <SplitSection>
        <div>
          <SectionTitle>오늘을 그리다</SectionTitle>
          {lastestList}
        </div>
        <div>
          <SectionTitle>요새 그리다</SectionTitle>
          {recommendList}
        </div>
      </SplitSection>
    </>
  );
}

export default MainPageTemplete;
