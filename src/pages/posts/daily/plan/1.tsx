import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Post from '@templates/Post';
import * as R from '@templates/ReusableCSS';

const Plan1 = () => {
  return (
    <Post 
      mainTitle="9월 계획"
      tag="Plan"
      date="23.08.31"
      subTitle="9월의 계획"
    >
      <StaticImage src="../../../assets/imgs/review/1/1.png" alt="post-img" 
        style={{ width: '100%', height: '60vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
      <R.PostContentBox>
        <h2>난 원래 J였다,,</h2>
        <p>그동안 회사를 다니고, 사회에 찌들어 가면서, 점점 TP가 되어 가는 걸 느꼈지만,</p>
        <p>사실 난 J라고,,!!</p>
        <p>그런 의미에서 새로운 9월을 준비하는 계획을 세울 것이다</p>
        <p>일단 사촌 형 결혼식 갔다가, 9월 6일 부터,,,</p>

        <h2>계획</h2>
        <h3>GitHubPages 전체 리팩토링</h3>
        <p>React와 Gatsby를 이용하여, 나만의 개발 블로그 만들기</p>
        <p>일단 왜 Gatsby인 지 조사하기</p>
        <p>다른 더 좋은 거 있으면 넘어가거나, 아니면 진짜 vanillaJS 이용할 수도,,,</p>

        <h3>1일 1백준</h3>
        <p>문제 풀고, 해설 블로그에 올리기</p>

        <h3>내년 여름 준비</h3>
        <p>주 5, 6일 운동</p>
        <p>유산소 주에 2번은 넣기,,,,?</p>
        <p>(하기 싫은데,,,)</p>
        <p>식단까진,,, 아직까진,,,</p>

        <h3>SOPT 지원</h3>
        <p>간지나게 붙어버리기</p>

        <h3>그 외 다른 활동 지원해 보기</h3>

        <h3>JS, TS 끝장내기</h3>
        <p>딱 대,,,</p>

        <h3>영어 회화 공부</h3>
        <p>미국 여행을 위한, 나의 미래를 위한 영어 회화 공부 하루 30분이라도</p>
        <p>미국 여행 비자 받기</p>

        <h3>바탕화면 및 핸드폰 갤러리 정리</h3>
        <R.PostImgBox>
          <StaticImage src="../../../../assets/imgs/plan/1/1.png" alt="sopt-apply-complete" />
          <p>파일들이 너무 많아,,</p>
        </R.PostImgBox>
        <p>인턴하면서 생긴 파일들 다 정리</p>
        <p>바빠서 정리 못한 사진 오백구천억개 정리</p>

        <h3>집안일 시작</h3>
        <p>커튼 빨기</p>

        <h2>할 수 있음</h2>
        <p>9월도 화이팅!🔥</p>
      </R.PostContentBox>
    </Post>
  );
};

export default Plan1;