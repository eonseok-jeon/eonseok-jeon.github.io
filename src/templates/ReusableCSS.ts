import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  padding: 0 10rem;

  /* 810px */
  @media screen and (max-width: 50.9375em) {
    padding: 0 10%;
  }
`;

const MainTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const SubTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 500;
`;

const PostImgBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  margin: 3rem auto 2.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  img {
    /* width: 40rem; */
    /* height: 30rem; */
    margin-bottom: 0.5rem;
    object-fit: contain;
    /* background-size: contain; */
    /* background-repeat: no-repeat; */
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
    padding: 0.3rem 1rem;
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
    padding: 0.3rem 1rem;
    background-color: #333;
    border-radius: 1rem;
  }

  blockquote {
    font-weight: 700;
    border: 0.4rem solid #555;
    border-radius: 1rem;
    padding: 1rem;
    margin: 5rem 0 2rem;
  }

  del {
    color: #aaa;
    font-size: 1.6rem;
    /* text-decoration: line-through; */
  }

  strong {
    border-radius: 5px;
    font-weight: 700;
    transition: all 0.5s ease;
  }

  strong:hover {
    padding: 0 1rem;
    color: #333;
    background-color: #ddd;
  }
`;

export { Container, MainTitle, SubTitle, PostImgBox, PostContentBox };
