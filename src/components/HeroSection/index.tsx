import React from 'react';
import * as R from '@templates/ReusableCSS';
import * as S from './style';

/** Main Page Hero Section */
const HeroSection = ({ isSticky }: { isSticky: boolean }) => {
  return (
    <S.HeroContainer isSticky={isSticky}>
      <S.IntroductionBox>
        <R.SubTitle>안녕!</R.SubTitle>
        <S.MainTitle>나, 전언석은</S.MainTitle>
        <S.DescriptionBox>
          <p>1998년 대한민국, 서울에서 태어나</p>
          <p>현재 고양시에 거주 중인</p>
          <p>FE Developer를 꿈꾸는 26세 청년이다.</p>
          <br />
          <p>이곳은 나의 배움을 공유하는 공간이다.</p>
          <p>무엇을 공유하는지 궁금한 사람은 아래의 버튼을 눌러보길 바란다.</p>
          <br />
          <p>참고로 이곳의 모든 디자인과 코드는 <strong>내가 짰다.</strong></p>
        </S.DescriptionBox>
      </S.IntroductionBox>
      <S.ExploreBtn to="#post-preview-list">구경하기</S.ExploreBtn>
    </S.HeroContainer>
  );
};

export default HeroSection;
