import { useState } from 'react';

/** 모달창 팝업 */
const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return { isModal, openModal, closeModal };
};

export default useModal;
