import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PostPreview from '@templates/PostPreview';
import * as S from './style';

/** Main Page Feature Section */
const PostList = () => {
  return (
    <S.PostDataList>
      <Link to="/posts/daily/review/4">
        <PostPreview mainTitle="SOPKATHON 회고" tag="Review" date="23.11.30" subTitle="눈물의 솝커톤,,🥲">
          <StaticImage src="../../assets/imgs/review/4/5.jpg" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>

      <Link to="/posts/daily/plan/2">
        <PostPreview mainTitle="10월 계획" tag="Plan" date="23.09.30" subTitle="9월의 점검 및 10월의 계획">
          <StaticImage src="../../assets/imgs/no-image.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>

      <Link to="/posts/daily/review/3">
        <PostPreview mainTitle="SOPT YB 지원" tag="Review" date="23.09.09" subTitle="SOPT 1차 서류 지원 후기">
          <StaticImage src="../../assets/imgs/review/3/1.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>

      <Link to="/posts/daily/review/2">
        <PostPreview
          mainTitle="첫 인턴 활동을 마치..."
          tag="Review"
          date="23.08.31"
          subTitle="2023.06.22 - 2023.08.31 경희대 여름...">
          <StaticImage src="../../assets/imgs/review/2/1.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>

      <Link to="/posts/daily/plan/1">
        <PostPreview mainTitle="9월 계획" tag="Plan" date="23.08.31" subTitle="9월의 계획">
          <StaticImage src="../../assets/imgs/no-image.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>

      <Link to="/posts/daily/review/1">
        <PostPreview
          mainTitle="UMC 4th 활동을 마..."
          tag="Review"
          date="23.08.27"
          subTitle="4th UMC 회고록 (2023.03 - 2023.08)">
          <StaticImage src="../../assets/imgs/review/1/2.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>

      <Link to="/posts/language/nextjs/1">
        <PostPreview
          mainTitle="EC2를 이용하여 Ne..."
          tag="NextJS"
          date="23.08.22"
          subTitle="NextJS EC2를 이용하여 배포">
          <StaticImage src="../../assets/imgs/nextJS/1/8.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>

      <Link to="/posts/language/electron-vite/1">
        <PostPreview
          mainTitle="alias path 설정"
          tag="Electron-vite"
          date="23.08.11"
          subTitle="electron-vite with react 초기 alias 설정...">
          <StaticImage src="../../assets/imgs/no-image.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>

      <Link to="/posts/code/til/1">
        <PostPreview mainTitle="초기 세팅" tag="TIL" date="23.08.11" subTitle="프로젝트 초기 세팅 하기">
          <StaticImage src="../../assets/imgs/no-image.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>

      <Link to="/posts/code/clean-coding/1">
        <PostPreview mainTitle="if else문 지양" tag="Clean-coding" date="23.08.11" subTitle="if-else 분기문을 지양하자">
          <StaticImage src="../../assets/imgs/no-image.png" alt="post-img" width={240} height={160} />
        </PostPreview>
      </Link>
    </S.PostDataList>
  );
};

export default PostList;
