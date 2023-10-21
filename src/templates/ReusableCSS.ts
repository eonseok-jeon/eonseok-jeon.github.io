import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  padding: 0 10rem;
`;

const MainTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: .8rem;
`;

const SubTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 500;
`;

const PostImgBox = styled.div`
  margin: 3rem auto 2.5rem;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 40rem; */
    /* height: 30rem; */
    margin-bottom: .5rem;
    background-size: contain;
    background-repeat: no-repeat;
  }

  p {
    font-size: 1.4rem;
    color: #aaa;
  }
`;

const PostContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 6rem 0;
  font-size: 2rem;
  line-height: 1.5;

  h2 {
    width: 100%;
    font-size: 2.2rem;
    font-weight: 500;
    padding: .3rem 1rem;
    margin-bottom: 1rem;
    background-color: #555;
    border-radius: 1rem;
  }

  h2:not(:first-child) {
    margin-top: 7rem;
  }

  h3 {
    display: flex;
    justify-content: center;
    font-weight: 500;
    margin: 2rem 0 1rem;
    padding: .3rem 1rem;
    background-color: #333;
    border-radius: 1rem;
  }

  blockquote {
    font-weight: 700;
    border: .4rem solid #555;
    border-radius: 1rem;
    padding: 1rem;
    margin: 5rem 0 2rem;
  }
`;

export {
  Container,
  MainTitle,
  SubTitle,
  PostImgBox,
  PostContentBox
};
