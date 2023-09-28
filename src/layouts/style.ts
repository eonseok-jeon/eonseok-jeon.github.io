import { Link } from 'gatsby';
import styled from 'styled-components';

interface IMainNavigationProps {
  sticky: boolean;
}

const MainNavigation = styled.nav<IMainNavigationProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5rem;
  /* margin: 0 9.8rem; */
  z-index: 999;
  
  position: ${({ sticky }) => sticky ? 'fixed' : ''};
  top: ${({ sticky }) => sticky ? '0' : ''};
  left: ${({ sticky }) => sticky ? '0' : ''};
  height: ${({ sticky }) => sticky ? '8rem' : '14.6rem'};
  background-color: ${({ sticky }) => sticky ? 'rgba(0, 0, 0, 0.8)' : ''};
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