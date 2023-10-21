import React from 'react';
import PostPreview from '@templates/PostPreview';
import { MainTitle, SubTitle } from '@templates/ReusableCSS';
import * as S from './style';
import { StaticImage } from 'gatsby-plugin-image';

/** Main Page Feature Section */
const FeatureSection = () => {
  return (
    <S.FeatureContainer id="post-preview-list">
      <MainTitle>My Posts</MainTitle>
      <SubTitle>Total (49)</SubTitle>
      <S.PostList>
        <PostPreview
          mainTitle="alias path 설정"
          tag="Electron-vite"
          date="23.08.11"
          subTitle="electron-vite with react 초기 alias 설정..."
        >
          <StaticImage src="../../assets/imgs/review/1/1.png" alt="post-img" width={240} height={160} />
        </PostPreview>
        <PostPreview
          mainTitle="UMC 4th 활동을 마..."
          tag="Review"
          date="23.08.27"
          subTitle="4th UMC 회고록 (2023.03 - 2023.08)"
        >
          <StaticImage src="../../assets/imgs/review/1/2.png" alt="post-img" width={240} height={160} />
        </PostPreview>
        <PostPreview
          mainTitle="10월 계획"
          tag="Plan"
          date="23.09.30"
          subTitle="9월의 점검 및 10월의 계획"
        >
          <StaticImage src="../../assets/imgs/review/1/1.png" alt="post-img" width={240} height={160} />
        </PostPreview>
        <PostPreview
          mainTitle="EC2를 이용하여 Ne..."
          tag="NextJS"
          date="23.08.22"
          subTitle="NextJS EC2를 이용하여 배포"
        >
          <StaticImage src="../../assets/imgs/nextJS/1/8.png" alt="post-img" width={240} height={160} />
        </PostPreview>
        <PostPreview
          mainTitle="SOPT YB 지원"
          tag="Review"
          date="23.09.09"
          subTitle="SOPT 1차 서류 지원 후기"
        >
          <StaticImage src="../../assets/imgs/review/3/1.png" alt="post-img" width={240} height={160} />
        </PostPreview>
        <PostPreview
          mainTitle="첫 인턴 활동을 마치..."
          tag="Review"
          date="23.08.31"
          subTitle="2023.06.22 - 2023.08.31 경희대 여름..."
        >
          <StaticImage src="../../assets/imgs/review/2/1.png" alt="post-img" width={240} height={160} />
        </PostPreview>
        <PostPreview
          mainTitle="9월 계획"
          tag="Plan"
          date="23.08.31"
          subTitle="9월의 계획"
        >
          <StaticImage src="../../assets/imgs/review/1/1.png" alt="post-img" width={240} height={160} />
        </PostPreview>
        <PostPreview
          mainTitle="초기 세팅"
          tag="TIL"
          date="23.08.11"
          subTitle="프로젝트 초기 세팅 하기"
        >
          <StaticImage src="../../assets/imgs/review/1/1.png" alt="post-img" width={240} height={160} />
        </PostPreview>
        <PostPreview
          mainTitle="if else문 지양"
          tag="Clean-coding"
          date="23.08.11"
          subTitle="if-else 분기문을 지양하자"
        >
          <StaticImage src="../../assets/imgs/review/1/1.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </S.PostList>
    </S.FeatureContainer>
  );
};

export default FeatureSection;
