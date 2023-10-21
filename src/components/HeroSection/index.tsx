import React from 'react';
import * as R from '@templates/ReusableCSS';
import * as S from './style';

/** Main Page Hero Section */
const HeroSection = ({ isSticky }: { isSticky: boolean }) => {
  return (
    <S.HeroContainer isSticky={isSticky}>
      <S.IntroductionBox>
        <R.SubTitle>Hello World!</R.SubTitle>
        <S.MainTitle>Thanks For Visiting My Web Page</S.MainTitle>
        <S.DescriptionBox>
          <p>Welcome to my personal corner.</p>
          <p>I share a mix of today&apos;s learnings, daily life,</p>
          <p>and various other intriguing tidbits.</p>
          <p>Dive in and explore with delight!</p>
        </S.DescriptionBox>
      </S.IntroductionBox>
      <S.ExploreBtn to="#post-preview-list">Explore</S.ExploreBtn>
    </S.HeroContainer>
  );
};

export default HeroSection;
