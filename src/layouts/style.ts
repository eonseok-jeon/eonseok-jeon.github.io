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
`;

const CategoryItem = styled.li`
  position: relative;
  padding: .2rem 0;

  button {
    cursor: pointer;
  }
`;

const CategoryLink = styled(Link)`
  &::before, &::after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: .2rem;
    content: '';
    background: #ddd;
    transition: all 0.3s;
  }
  
  &::before {
    right: 0;
    top: -0.2rem;
  }

  &::after {
    left: 0;
    bottom: 0;
  }
  
  &:hover::before, &:hover::after {
    opacity: 1;
    width: 100%;
  }

`;

const SubCategoryList = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 2.3rem;
  padding-top: .7rem;
`;

export {
  MainNavigation,
  MainLogoBox,
  CategoryList,
  CategoryItem,
  CategoryLink,
  SubCategoryList
};
