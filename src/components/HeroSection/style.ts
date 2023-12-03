import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import * as R from '@templates/ReusableCSS';

interface IHeroContainerProps {
  $isSticky: boolean;
}

const HeroContainer = styled(R.Container)<IHeroContainerProps>`
  display: flex;
  flex-direction: column;
  /* max-width: 121.6rem; */
  /* max-width: 120rem; */
  height: calc(100vh - 14.6rem);
  margin: ${({ $isSticky }) => ($isSticky ? '14.6rem auto 0' : '0 auto')};
`;

const IntroductionBox = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  justify-content: center;
  margin: 7% 0;
`;

const MainTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  word-break: keep-all;
`;

const DescriptionBox = styled.div`
  font-size: 2.4rem;
  letter-spacing: 0.2rem;
  word-break: keep-all;
`;

interface ISecretAgeParagraphProps {
  $showAge: boolean;
}

const SecretAgeParagraph = styled.p<ISecretAgeParagraphProps>`
  display: inline-block;
  transition: opacity 0.5s ease;

  ${({ $showAge }) =>
    $showAge
      ? css`
          margin-left: 0;
          pointer-events: auto;
          visibility: visible;
          opacity: 1;
        `
      : css`
          margin-left: -10.2rem;
          pointer-events: none;
          visibility: hidden;
          opacity: 0;
        `}
`;

interface ISecretParagraphProps {
  $showText: boolean;
}

const SecretParagraph = styled.p<ISecretParagraphProps>`
  display: inline-block;
  margin-left: 1rem;
  color: #333;
  opacity: ${({ $showText }) => ($showText ? 1 : 0)};
  transition: all 1s ease;
`;

interface IExploreBoxProps {
  $btnHover: boolean;
}

const ExploreBox = styled.div<IExploreBoxProps>`
  ${({ $btnHover }) =>
    $btnHover &&
    css`
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 100rem;
    `}

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-0.1rem, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(0.2rem, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-0.4rem, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(0.4rem, 0, 0);
    }
  }
`;

const ExploreBtn = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 10rem;
  padding: 0 10%;
  margin: 1.4rem auto 0;
  border: 1px solid #ddd;
  border-radius: 50px;
  outline: none;
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  word-break: keep-all;
  cursor: pointer;
  transition: all 0.5s ease;
  z-index: 0;

  &::before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -0.2rem;
    left: -0.2rem;
    background-size: 400%;
    z-index: -1;
    filter: blur(0.5rem);
    width: calc(100% + 0.4rem);
    height: calc(100% + 0.4rem);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 5rem;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    left: 0;
    top: 0;
    border-radius: 5rem;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export {
  HeroContainer,
  IntroductionBox,
  MainTitle,
  DescriptionBox,
  SecretAgeParagraph,
  SecretParagraph,
  ExploreBox,
  ExploreBtn,
};
