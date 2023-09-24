import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const MainNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 14.6rem;
  padding: 0 9.8rem;
`;

const MainLogoBox = styled(Link)`
  display: flex;
  gap: .9rem;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
`;

const CategoryList = styled.ul`
  display: flex;
  gap: 4.8rem;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  li, button { 
    cursor: pointer;
  }
`;

/** Main Navigation */
const MainNav = () => {
  return (
    <MainNavigation>
      <MainLogoBox to="/">
        <StaticImage src="../assets/icons/mainLogo.svg" alt="main-logo" />
        <p>Eon-Seok&apos;s Devlog</p>
      </MainLogoBox>
      <CategoryList>
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
      </CategoryList>
    </MainNavigation>
  );
};

export default MainNav;
