import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './style';

/** 포스트 미리보기 */
const PostPreview = () => {
  return (
    <li>
      <S.PostArticle>
        <S.PostImgBox>
          <StaticImage src="../../assets/imgs/test.png" alt="img" width={240} height={184} />
          <S.TagBox>React</S.TagBox>
        </S.PostImgBox>
        <S.PostInfoBox>
          <S.PostTitleBox>
            <StaticImage src="../../assets/icons/reactIc.svg" alt="img" />
            <p>제목</p>
          </S.PostTitleBox>
          <S.PostSubTitleParagraph>소제목</S.PostSubTitleParagraph>
          <S.PostDateParagraph>23.09.26</S.PostDateParagraph>
        </S.PostInfoBox>
      </S.PostArticle>
    </li>
  );
};

export default PostPreview;