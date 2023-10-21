import React from 'react';
import styled from 'styled-components';

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-evenly;
  width: 40rem;
  height: 20rem;
  padding: 2rem;
  border-radius: 2rem;
  color: black;
  word-break: keep-all;
  background-color: #888;
  transform: translate(-50%, -50%);
  z-index: 30;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
`;

const CloseButton = styled.button`
  font-size: 2.2rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  color: #ddd;
  font-weight: 700;
  background-color: #000;
  transition: transform 30s ease-in;

  &:hover {
    transform: scale(100);
  }
`;

const OverlayBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000099;
  z-index: 20;
`;

/** 모달창 */
const Modal = () => {
  return (
    <>
      <ModalBox>
        <DescriptionBox>
          <p>블로그 주인장의 현생 바쁨 이슈로 인해 아직 이 기능은 개발 중에 있습니다ㅜ 🥲</p>
          <p>빠른 시일 내에 개발 완료해보도록 하겠습니다,,!!!!</p>
        </DescriptionBox>
        <CloseButton>응원하기</CloseButton>
      </ModalBox>
      <OverlayBox />
    </>
  );
};

export default Modal;