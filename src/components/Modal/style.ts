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

export {
  ModalBox,
  DescriptionBox,
  CloseButton,
  OverlayBox
};