import React from 'react';
import * as S from './style';

/** Main Page Hero Section */
const HeroSection = () => {
  return (
    <S.Main>
      <S.IntroductionBox>
        <S.SubTitle>Hello World!</S.SubTitle>
        <S.MainTitle>Thanks For Visiting My Web Page</S.MainTitle>
        <S.DescriptionBox>
          <p>Welcome to my personal corner.</p>
          <p>I share a mix of today&apos;s learnings, daily life,</p>
          <p>and various other intriguing tidbits.</p>
          <p>Dive in and explore with delight!</p>
        </S.DescriptionBox>
      </S.IntroductionBox>
      <S.ExploreBtn>Explore</S.ExploreBtn>
    </S.Main>
  );
};

export default HeroSection;