import styled from 'styled-components';

const PostArticle = styled.article`
  width: 25.6rem;
  height: 25.6rem;
  margin-bottom: 7rem;
  padding: .8rem;
  background-color: rgb(85, 85, 85);
  border-radius: 1.2rem;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const PostImgBox = styled.div`
  position: relative;
  
  img { 
    border-radius: 1.2rem;
  }
`;

const TagBox = styled.div`
  position: absolute;
  left: .8rem;
  bottom: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .4rem .8rem;
  background-color: red;
  border-radius: .8rem;
`;

const PostInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  justify-content: center;
  margin-top: .8rem;
`;

const PostTitleBox = styled.div`
  display: flex;
  gap: .4rem;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 700;
`;

const PostSubTitleParagraph = styled.p`
  font-size: 1.4rem;
  color: #aaa;
`;

const PostDateParagraph = styled.p`
  margin-left: auto;
  color: #777;
`;

export {
  PostArticle,
  PostImgBox,
  TagBox,
  PostInfoBox,
  PostTitleBox,
  PostSubTitleParagraph,
  PostDateParagraph
};
