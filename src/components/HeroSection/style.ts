import styled from 'styled-components';
import { Container } from '@templates/ReusableCSS';

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  /* max-width: 121.6rem; */
  /* max-width: 120rem; */
  height: calc(100vh - 14.6rem);
  margin: 0 auto 0;
`;

const IntroductionBox = styled.div`
  display: flex;
  gap: .8rem;
  flex-direction: column;
  justify-content: center;
  height: 41.2rem;
`;

const MainTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: .8rem;
`;

const DescriptionBox = styled.div`
  font-size: 2.4rem;
  letter-spacing: .2rem;
`;

const ExploreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 10rem;
  border: 1px solid #ddd;
  border-radius: 5rem;
  outline: none;
  margin: 1.4rem auto 0;
  font-size: 3.2rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  z-index: 0;
  transition: all .5s ease;

  &::before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -0.2rem;
    left:-0.2rem;
    background-size: 400%;
    z-index: -1;
    filter: blur(.5rem);
    width: calc(100% + .4rem);
    height: calc(100% + .4rem);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 5rem;
  }

  &:active {
    color: #000
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
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
`;

export {
  HeroContainer,
  IntroductionBox,
  MainTitle,
  DescriptionBox,
  ExploreBtn
};