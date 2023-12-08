import React from 'react';
import * as S from './style';
import useTrueFalse from '@hooks/useTrueFalse';

/** Main Page Hero Section */
const HeroSection = ({ isSticky }: { isSticky: boolean }) => {
  const { isTrue: showAge, makeTrue: setShowAge, makeFalse: unsetShowAge } = useTrueFalse();
  const { isTrue: btnHover, makeTrue: setBtnHover, makeFalse: unsetBtnHover } = useTrueFalse();
  const { isTrue: showText, makeTrue: setShowText, makeFalse: unsetShowText } = useTrueFalse();

  return (
    <S.HeroContainer $isSticky={isSticky}>
      <S.IntroductionBox>
        <S.MainTitle>나는 전언석이다.</S.MainTitle>
        <S.DescriptionBox>
          <p>1998년 대한민국, 서울에서 태어나</p>
          <p>현재 고양시에 거주 중인</p>
          <p>
            FE Developer를 꿈꾸는{' '}
            <strong onMouseEnter={setShowAge} onMouseLeave={unsetShowAge}>
              26세
            </strong>
            <S.SecretAgeParagraph $showAge={showAge}>(만 25세)</S.SecretAgeParagraph> 청년이다.
          </p>
          <br />
          <p>이곳은 나의 배움을 공유하는 공간이다.</p>
          <p>
            무엇을 공유하는지 궁금한 사람은{' '}
            <strong onMouseEnter={setBtnHover} onMouseLeave={unsetBtnHover}>
              아래의 구경하기 버튼
            </strong>
            을 눌러보길 바란다.
          </p>
          <br />
          <p>
            참고로 이곳의 모든 디자인과 코드는
            <strong onMouseEnter={setShowText} onMouseLeave={unsetShowText}>
              {' '}
              내가 짰다.
            </strong>
            <S.SecretParagraph $showText={showText}>이런 남자 어떤데,,</S.SecretParagraph>
          </p>
        </S.DescriptionBox>
      </S.IntroductionBox>
      <S.ExploreBox $btnHover={btnHover}>
        <S.ExploreBtn to="#post-preview-list">구경하기</S.ExploreBtn>
      </S.ExploreBox>
    </S.HeroContainer>
  );
};

export default HeroSection;
