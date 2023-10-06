import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Post from '@templates/Post';
import { PostContentBox } from '@templates/ReusableCSS';

const Plan2 = () => {
  return (
    <Post 
      mainTitle="10월 계획"
      tag="Plan"
      date="23.09.30"
      subTitle="9월의 점검 및 10월의 계획"
    >
      <StaticImage src="../../../assets/imgs/review/1/1.png" alt="post-img" 
        style={{ width: '100%', height: '60vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
      <PostContentBox>
        <h2>9월의 계획 점검</h2>
        <h3>GitHubPages 전체 리팩토링</h3>
        <p>흙흙,, 아직도 진행 중,,</p>
        <p>생각보다 너무나도 오래 걸리네,,</p>
        <p>ㅜㅜㅜㅜㅜㅜ hero section도 다시 짜야 해,,,</p>
        <p>반응형/적응형도 만들어야 하고</p>
        <p>db도 연결해야 하고 할 거 많다,,</p>
        <p>부지런히 합시다,, 진짜,,</p>

        <h3>1일 1백준</h3>
        <p>응~ 한 달 0백준 성공!</p>
        <p>진짜 10월은 이렇게 살면 안된다,, 우테코 가야지,,</p>

        <h3>내년 여름 준비</h3>
        <p>생각보다 너무 바빴어가지고 잘 못했다</p>
        <p>내가 게으른 것도 큼,,</p>
        <p>진짜 계획 뭐 하나 이룬 거 없네,,</p>

        <h3>SOPT 지원</h3>
        <p>간지나게 붙어버렸다 😎</p>
        <p>솔직히 이거 하나만으로도 9월 성공적으로 보낸 느낌</p>

        <h3>그 외 다른 활동 지원해 보기</h3>
        <p>SOPT 붙었기에 패스!</p>
        <p>우테코는 지원 해보쟈!</p>

        <h3>JS, TS 끝장내기</h3>
        <p>내 인생이 끝장남,,🥲</p>
        <p>핑계를 대자면, 블로그 만들기가 생각보다 어려워서,,</p>
        <p>SOPT 준비가 생각보다 오래 걸려서,,</p>
        <p>큼큼,,,</p>

        <h3>영어 회화 공부</h3>
        <p>1도 안 함</p>
        <p>미국 안 갈꺼야?!!!!?!</p>
        <p>미국 가서 어버버 거리다 총 맞을 거야?!!!?!</p>
        <p>SOPT 영어 스터디 들어간다,,, 진짜 야나두 딱 대,,</p>

        <h3>바탕화면 및 핸드폰 갤러리 정리</h3>
        <p>정리했었는데 다시 더러워지고 있,,</p>
        
        <h3>집안일 시작</h3>
        <p>커튼 드디어 빨았다! 속이 다 시원s</p>

        <h3>총평</h3>
        <p>3/9 계획 이행률 33.3333%</p>
        <p>,,,</p>
        <p>그래 그동안 못 쉬었던 거 9월에 다 쉰 거로 치고,,</p>
        <p>10월 부터 진짜 제대로 드간다</p>

        <h2>10월의 계획</h2>
        <h3>우테코 지원하기</h3>
        <p>우테코 프리코스 신청</p>
        
        <h3>SOPT의 모든 활동 빠지지 않기</h3>
        <p>모든 세미나 과제 다 하기</p>
        <p>모든 스터디 과제 다 하기</p>

        <h3>1일 1알고리즘</h3>
        <p>문제를 풀던</p>
        <p>강의를 듣던</p>
        <p>하루에 알고리즘과 관련된 하나는 무조건 하기</p>

        <h3>주 5 운동 목표</h3>
        <p>무산소만 할 거야</p>
        <p>오운완 스터디 화이팅</p>

        <h3>JS, TS 끝장내기</h3>
        <p>딱 대,,,</p>

        <h3>영어 회화 공부</h3>
        <p>야나두 스터디 렛츠고</p>
        <p>미국 여행을 위한, 나의 미래를 위한 영어 회화 공부 하루 30분이라도</p>

        <h3>개발 블로그 발전시키기</h3>
        <p>더 멋진 사이트로 만들기</p>
        <p>게시글도 자주 업로드</p>

        <h2>이젠 진짜 해야 해</h2>
        <p>10월 진짜 화이팅!🔥</p>
      </PostContentBox>
    </Post>
  );
};

export default Plan2;