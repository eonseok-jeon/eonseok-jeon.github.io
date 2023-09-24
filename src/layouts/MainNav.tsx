import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './style';

/** Main Navigation */
const MainNav = () => {
  return (
    <S.MainNavigation>
      <S.MainLogoBox to="/">
        <StaticImage src="../assets/icons/mainLogo.svg" alt="main-logo" />
        <p>Eon-Seok&apos;s Devlog</p>
      </S.MainLogoBox>
      <S.CategoryList>
        <li>
          <Link to="#">All</Link>
        </li>
        <li>
          <Link to="#">Algorithm</Link>
        </li>
        <li>
          <Link to="#">Code</Link>
        </li>
        <li>
          <Link to="#">CS</Link>
        </li>
        <li>
          <Link to="#">Language</Link>
        </li>
        <li>
          <Link to="#">Review</Link>
        </li>
        <li>
          <button>
            <StaticImage src="../assets/icons/searchIc.svg" alt="search-icon" />
          </button>
        </li>
      </S.CategoryList>
    </S.MainNavigation>
  );
};

export default MainNav;
