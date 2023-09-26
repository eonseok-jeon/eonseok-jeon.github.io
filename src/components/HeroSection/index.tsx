import React from 'react';
import * as S from './style';
import { SubTitle } from '@templates/ReusableCSS';

/** Main Page Hero Section */
const HeroSection = () => {
  return (
    <S.HeroContainer>
      <S.IntroductionBox>
        <SubTitle>Hello World!</SubTitle>
        <S.MainTitle>Thanks For Visiting My Web Page</S.MainTitle>
        <S.DescriptionBox>
          <p>Welcome to my personal corner.</p>
          <p>I share a mix of today&apos;s learnings, daily life,</p>
          <p>and various other intriguing tidbits.</p>
          <p>Dive in and explore with delight!</p>
        </S.DescriptionBox>
      </S.IntroductionBox>
      <S.ExploreBtn>Explore</S.ExploreBtn>
    </S.HeroContainer>
  );
};

export default HeroSection;