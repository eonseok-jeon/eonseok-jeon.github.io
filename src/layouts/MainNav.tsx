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
          <p>Eon-Seok&apos;s Devlog</p>
        </S.MainLogoBox>
        <S.CategoryList>
          <S.CategoryItem>
            <S.CategoryLink to="#post-preview-list">All</S.CategoryLink>
          </S.CategoryItem>
          <S.CategoryItem>
            <S.CategoryLink to="#" onClick={openModal}>Algorithm</S.CategoryLink>
          </S.CategoryItem>
          <S.CategoryItem
            onMouseEnter={() => { setSubCategory('code'); }}
            onMouseLeave={() => { setSubCategory(''); }}
          >
            <S.CategoryLink to="#">Code</S.CategoryLink>
            {subCategory === 'code' && (
              <S.SubCategoryList>
                <li data-hover="Clean coding" onClick={openModal}>
                  <Link to="#">Clean coding</Link>
                </li>
                <li data-hover="Refactoring" onClick={openModal}>
                  <Link to="#">Refactoring</Link>
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
            <S.CategoryLink to="#">CS</S.CategoryLink>
            {subCategory === 'cs' && (
              <S.SubCategoryList>
                <li data-hover="Computer Architecture" onClick={openModal}>
                  <Link to="#">Computer Architecture</Link>
                </li>
                <li data-hover="Computer Network" onClick={openModal}>
                  <Link to="#">Computer Network</Link>
                </li>
              </S.SubCategoryList>
            )}
          </S.CategoryItem>
          <S.CategoryItem
            onMouseEnter={() => { setSubCategory('language'); }}
            onMouseLeave={() => { setSubCategory(''); }}
          >
            <S.CategoryLink to="#">Language</S.CategoryLink>
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
            <S.CategoryLink to="#">Review</S.CategoryLink>
            {subCategory === 'review' && (
              <S.SubCategoryList>
                <li data-hover="plan" onClick={openModal}>
                  <Link to="#">plan</Link>
                </li>
                <li data-hover="review" onClick={openModal}>
                  <Link to="#">review</Link>
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
