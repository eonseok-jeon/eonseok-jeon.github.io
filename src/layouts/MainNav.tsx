import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './style';

/** Main Navigation */
const MainNav = ({ isSticky }: { isSticky: boolean }) => {
  return (
    <S.MainNavigation sticky={isSticky}>
      <S.MainLogoBox to="/">
        <StaticImage src="../assets/icons/mainLogo.svg" alt="main-logo" />
        <p>Eon-Seok&apos;s Devlog</p>
      </S.MainLogoBox>
      <S.CategoryList>
        <S.CategoryItem>
          <Link to="#">All</Link>
        </S.CategoryItem>
        <S.CategoryItem>
          <Link to="#">Algorithm</Link>
        </S.CategoryItem>
        <S.CategoryItem>
          <Link to="#">Code</Link>
        </S.CategoryItem>
        <S.CategoryItem>
          <Link to="#">CS</Link>
        </S.CategoryItem>
        <S.CategoryItem>
          <Link to="#">Language</Link>
        </S.CategoryItem>
        <S.CategoryItem>
          <Link to="#">Review</Link>
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
