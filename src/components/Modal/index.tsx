import React from 'react';
import * as S from './style';

interface IModalProps {
  closeModal: () => void;
}

/** 모달창 */
const Modal = ({ closeModal }: IModalProps) => {
  return (
    <>
      <S.ModalBox>
        <S.DescriptionBox>
          <p>블로그 주인장의 현생 바쁨 이슈로 인해 아직 이 기능은 개발 중에 있습니다ㅜ 🥲</p>
          <p>빠른 시일 내에 개발 완료해보도록 하겠습니다,,!!!!</p>
        </S.DescriptionBox>
        <S.CloseButton onClick={closeModal}>응원하기</S.CloseButton>
      </S.ModalBox>
      <S.OverlayBox onClick={closeModal}/>
    </>
  );
};

export default Modal;