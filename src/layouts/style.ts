import { Link } from 'gatsby';
import styled from 'styled-components';

const MainNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 14.6rem;
  padding: 0 5rem;
  /* margin: 0 9.8rem; */
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

export {
  MainNavigation,
  MainLogoBox,
  CategoryList
};