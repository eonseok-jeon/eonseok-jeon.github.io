import styled from 'styled-components';
import * as R from '../ReusableCSS';

const PostArticle = styled.article`
  max-width: 120rem;
  margin: 8rem auto 0;
  padding: 7%;

  &::-webkit-scrollbar {
    display: visible; /* Chrome, Safari, Opera*/
  }

  pre {
    display: inline-block;
    width: 100%;
    overflow: auto;
    margin: 2rem 0;
    padding: 0.1rem 2rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #222;
    border: 0.1rem solid #666;
  }
`;

const PostMainTitleBox = styled.div`
  margin-bottom: 2rem;
`;

const PostSubTitle = styled(R.SubTitle)`
  padding: 2rem 0;
  font-weight: 500;
  border-bottom: 0.1rem solid #ddd;
`;

export { PostArticle, PostMainTitleBox, PostSubTitle };
