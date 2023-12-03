import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

interface IMainNavigationProps {
  sticky: boolean;
}

const MainNavigation = styled.nav<IMainNavigationProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5rem;
  z-index: 10;

  position: ${({ sticky }) => (sticky ? 'fixed' : '')};
  top: ${({ sticky }) => (sticky ? '0' : '')};
  left: ${({ sticky }) => (sticky ? '0' : '')};
  height: ${({ sticky }) => (sticky ? '8rem' : '14.6rem')};
  background-color: ${({ sticky }) => (sticky ? 'rgba(0, 0, 0, 0.8)' : '')};
`;

const MainLogoBox = styled(Link)`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
`;

interface ICategoryListProps {
  $showMenu: boolean;
}

const CategoryList = styled.ul<ICategoryListProps>`
  display: flex;
  gap: 4.8rem;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  /* 830px */
  @media screen and (max-width: 51.875em) {
    display: ${({ $showMenu }) => ($showMenu ? 'inline-block' : 'none')};

    background-color: rgba(3, 3, 3, 0.9);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in;

    z-index: 2;

    ${({ $showMenu }) =>
      $showMenu
        ? css`
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transform: translateX(0);
          `
        : css`
            opacity: 0;
            pointer-events: none;
            visibility: hidden;
            transform: translateX(100%);
          `}
  }
`;

const CategoryItem = styled.li`
  position: relative;
  padding: 0.2rem 0;

  button {
    cursor: pointer;
  }
`;

const CategoryLink = styled(Link)`
  &::before,
  &::after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 0.2rem;
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

  &:hover::before,
  &:hover::after {
    opacity: 1;
    width: 100%;
  }
`;

const SubCategoryList = styled.ul`
  position: absolute;
  left: -0.5rem;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  justify-content: center;
  margin-top: 2.36rem;
  padding-top: 0.7rem;
  background-color: #000;
  border-radius: 0.5rem;

  li {
    position: relative;
    padding: 0.5rem 1.2rem 0.5rem 0.5rem;
    color: #777;
    border-radius: 0.5rem;
    text-shadow: none;
    word-break: keep-all;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  li:hover {
    background-color: #555;
  }

  li::before {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    max-width: 0;
    opacity: 0;
    padding: 0.5rem 1.2rem 0.5rem 0.5rem;
    content: attr(data-hover);
    color: #ddd;
    font-weight: 700;
    -webkit-transition: max-width 0.5s ease-out;
    -moz-transition: max-width 0.5s ease-out;
    transition: max-width 0.5s ease-out;
  }

  li:hover::before,
  li:focus::before {
    max-width: 100%;
    opacity: 1;
  }

  /* 830px */
  @media screen and (max-width: 51.875em) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;

  /* 830px */
  @media screen and (max-width: 51.875em) {
    display: inline-block;

    z-index: 99999;
  }
`;

export { MainNavigation, MainLogoBox, CategoryList, CategoryItem, CategoryLink, SubCategoryList, MenuButton };
