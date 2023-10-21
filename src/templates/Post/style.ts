import styled from 'styled-components';
import { SubTitle } from '../ReusableCSS';

const PostArticle = styled.article`
  max-width: 120rem;
  margin: 8rem auto 0 ;
  padding: 13.2rem 10rem 7rem; 

  pre {
    display: inline-block;
    overflow: auto;
    margin: 2rem 0;
    padding: .1rem 2rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #222;
    border: .1rem solid #666;

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

const PostMainTitleBox = styled.div`
  margin-bottom: 2rem;
`;

const PostSubTitle = styled(SubTitle)`
  padding: 2rem 0;
  font-weight: 500;
  border-bottom: .1rem solid #ddd;
`;

export {
  PostArticle,
  PostMainTitleBox,
  PostSubTitle
};