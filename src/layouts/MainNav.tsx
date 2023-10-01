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
              <li>
                <Link to="#">Clean coding</Link>
              </li>
              <li>
                <Link to="#">Refactoring</Link>
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
              <li>
                <Link to="#">Computer Architecture</Link>
              </li>
              <li>
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
              <li>
                <Link to="#">HTML</Link>
              </li>
              <li>
                <Link to="#">CSS</Link>
              </li>
              <li>
                <Link to="#">JavaScript</Link>
              </li>
              <li>
                <Link to="#">TypeScript</Link>
              </li>
              <li>
                <Link to="#">React</Link>
              </li>
              <li>
                <Link to="#">NextJS</Link>
              </li>
              <li>
                <Link to="#">Gatsby</Link>
              </li>
              <li>
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
