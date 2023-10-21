import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Modal from '@components/Modal';
import useModal from '@hooks/useModal';
import * as S from './style';

/** Main Navigation */
const MainNav = ({ isSticky }: { isSticky: boolean }) => {
  const [subCategory, setSubCategory] = useState('');
  
  const { isModal, openModal, closeModal } = useModal();

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  },[]);

  return (
    <>
      {isModal && <Modal closeModal={closeModal} />}
      <S.MainNavigation sticky={isSticky}>
        <S.MainLogoBox to="/">
          <StaticImage src="../assets/icons/mainLogo.svg" alt="main-logo" />
          <p>개발 블로그</p>
        </S.MainLogoBox>
        <S.CategoryList>
          <S.CategoryItem>
            <S.CategoryLink to="#post-preview-list">전체</S.CategoryLink>
          </S.CategoryItem>
          <S.CategoryItem>
            <S.CategoryLink to="#" onClick={openModal}>알고리즘</S.CategoryLink>
          </S.CategoryItem>
          <S.CategoryItem
            onMouseEnter={() => { setSubCategory('code'); }}
            onMouseLeave={() => { setSubCategory(''); }}
          >
            <S.CategoryLink to="#" onClick={openModal}>코딩</S.CategoryLink>
            {subCategory === 'code' && (
              <S.SubCategoryList>
                <li data-hover="클린코딩" onClick={openModal}>
                  <Link to="#">클린코딩</Link>
                </li>
                <li data-hover="리팩토링" onClick={openModal}>
                  <Link to="#">리팩토링</Link>
                </li>
                <li data-hover="TIL" onClick={openModal}>
                  <Link to="#">TIL</Link>
                </li>
              </S.SubCategoryList>
            )}
          </S.CategoryItem>
          <S.CategoryItem
            onMouseEnter={() => { setSubCategory('cs'); }}
            onMouseLeave={() => { setSubCategory(''); }}
          >
            <S.CategoryLink to="#" onClick={openModal}>컴퓨터</S.CategoryLink>
            {subCategory === 'cs' && (
              <S.SubCategoryList>
                <li data-hover="컴퓨터구조" onClick={openModal}>
                  <Link to="#">컴퓨터구조</Link>
                </li>
                <li data-hover="컴퓨터네트워크" onClick={openModal}>
                  <Link to="#">컴퓨터네트워크</Link>
                </li>
              </S.SubCategoryList>
            )}
          </S.CategoryItem>
          <S.CategoryItem
            onMouseEnter={() => { setSubCategory('language'); }}
            onMouseLeave={() => { setSubCategory(''); }}
          >
            <S.CategoryLink to="#" onClick={openModal}>언어</S.CategoryLink>
            {subCategory === 'language' && (
              <S.SubCategoryList>
                <li data-hover="HTML" onClick={openModal}>
                  <Link to="#">HTML</Link>
                </li>
                <li data-hover="CSS" onClick={openModal}>
                  <Link to="#">CSS</Link>
                </li>
                <li data-hover="JavaScript" onClick={openModal}>
                  <Link to="#">JavaScript</Link>
                </li>
                <li data-hover="TypeScript" onClick={openModal}>
                  <Link to="#">TypeScript</Link>
                </li>
                <li data-hover="React" onClick={openModal}>
                  <Link to="#">React</Link>
                </li>
                <li data-hover="NextJS" onClick={openModal}>
                  <Link to="#">NextJS</Link>
                </li>
                <li data-hover="Gatsby" onClick={openModal}>
                  <Link to="#">Gatsby</Link>
                </li>
                <li data-hover="Electron-vite" onClick={openModal}>
                  <Link to="#">Electron-vite</Link>
                </li>
              </S.SubCategoryList>
            )}
          </S.CategoryItem>
          <S.CategoryItem
            onMouseEnter={() => { setSubCategory('review'); }}
            onMouseLeave={() => { setSubCategory(''); }}
          >
            <S.CategoryLink to="#" onClick={openModal}>일상</S.CategoryLink>
            {subCategory === 'review' && (
              <S.SubCategoryList>
                <li data-hover="계획" onClick={openModal}>
                  <Link to="#">계획</Link>
                </li>
                <li data-hover="회고" onClick={openModal}>
                  <Link to="#">회고</Link>
                </li>
              </S.SubCategoryList>
            )}
          </S.CategoryItem>
          <S.CategoryItem>
            <button onClick={openModal}>
              <StaticImage src="../assets/icons/searchIc.svg" alt="search-icon" />
            </button>
          </S.CategoryItem>
        </S.CategoryList>
      </S.MainNavigation>
    </>
  );
};

export default MainNav;
