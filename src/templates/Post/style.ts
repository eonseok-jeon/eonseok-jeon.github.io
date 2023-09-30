import styled from 'styled-components';
import { SubTitle } from '../ReusableCSS';

const PostArticle = styled.article`
  max-width: 120rem;
  margin: 8rem auto 0 ;
  padding: 13.2rem 10rem 7rem; 
`;

const PostMainTitleBox = styled.div`
  margin-bottom: 2rem;
`;

const PostSubTitle = styled(SubTitle)`
  padding: 2rem 0;
  font-weight: 500;
  border-bottom: .1rem solid #ddd;
`;

const PostContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 6rem 0;
  font-size: 2rem;
  line-height: 1.5;

  h2 {
    font-size: 2.2rem;
    font-weight: 500;
    padding-left: 1rem;
    margin-bottom: 1rem;
    background-color: #555;
    border-radius: 1rem;
  }

  h2:not(:first-child) {
    margin-top: 7rem;
  }

  blockquote {
    font-weight: 700;
    border: .4rem solid #555;
    border-radius: 1rem;
    padding: 1rem;
    margin: 5rem 0 2rem;
  }
`;

const PostImgBox = styled.div`
  margin: 3rem auto 2.5rem;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40rem;
    height: 30rem;
    margin-bottom: .5rem;
    background-size: contain;
    background-repeat: no-repeat;
  }

  p {
    font-size: 1.4rem;
    color: #aaa;
  }
`;

export {
  PostArticle,
  PostMainTitleBox,
  PostSubTitle,
  PostContentBox,
  PostImgBox
};