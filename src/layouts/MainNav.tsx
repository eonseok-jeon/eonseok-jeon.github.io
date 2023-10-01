import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './style';

/** Main Navigation */
const MainNav = ({ isSticky }: { isSticky: boolean }) => {
  const [subCategory, setSubCategory] = useState('');

  return (
    <S.MainNavigation sticky={isSticky}>
      <S.MainLogoBox to="/">
        <StaticImage src="../assets/icons/mainLogo.svg" alt="main-logo" />
        <p>Eon-Seok&apos;s Devlog</p>
      </S.MainLogoBox>
      <S.CategoryList>
        <S.CategoryItem>
          <S.CategoryLink to="#">All</S.CategoryLink>
        </S.CategoryItem>
        <S.CategoryItem>
          <S.CategoryLink to="#">Algorithm</S.CategoryLink>
        </S.CategoryItem>
        <S.CategoryItem
          onMouseEnter={() => { setSubCategory('code'); }}
          onMouseLeave={() => { setSubCategory(''); }}
        >
          <S.CategoryLink to="#">Code</S.CategoryLink>
          {subCategory === 'code' && (
            <S.SubCategoryList>
              <li data-hover="Clean coding">
                <Link to="#">Clean coding</Link>
              </li>
              <li data-hover="Refactoring">
                <Link to="#">Refactoring</Link>
              </li>
              <li data-hover="TIL">
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
              <li data-hover="Computer Architecture">
                <Link to="#">Computer Architecture</Link>
              </li>
              <li data-hover="Computer Network">
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
              <li data-hover="HTML">
                <Link to="#">HTML</Link>
              </li>
              <li data-hover="CSS">
                <Link to="#">CSS</Link>
              </li>
              <li data-hover="JavaScript">
                <Link to="#">JavaScript</Link>
              </li>
              <li data-hover="TypeScript">
                <Link to="#">TypeScript</Link>
              </li>
              <li data-hover="React">
                <Link to="#">React</Link>
              </li>
              <li data-hover="NextJS">
                <Link to="#">NextJS</Link>
              </li>
              <li data-hover="Gatsby">
                <Link to="#">Gatsby</Link>
              </li>
              <li data-hover="Electron-vite">
                <Link to="#">Electron-vite</Link>
              </li>
            </S.SubCategoryList>
          )}
        </S.CategoryItem>
        <S.CategoryItem>
          <S.CategoryLink to="#">Review</S.CategoryLink>
        </S.CategoryItem>
        <S.CategoryItem>
          <button>
            <StaticImage src="../assets/icons/searchIc.svg" alt="search-icon" />
          </button>
        </S.CategoryItem>
      </S.CategoryList>
    </S.MainNavigation>
  );
};

export default MainNav;
