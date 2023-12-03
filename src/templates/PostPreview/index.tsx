import React, { PropsWithChildren } from 'react';
import ReactIc from '@assets/icons/reactIc.svg';
import * as S from './style';

interface IPostPreviewProps {
  mainTitle: string;
  tag: string;
  date: string;
  subTitle: string;
}

/** 포스트 미리보기 */
const PostPreview = ({ mainTitle, tag, date, subTitle, children }: PropsWithChildren<IPostPreviewProps>) => {
  return (
    <S.PostItem>
      <S.PostArticle>
        <S.PostImgBox>
          {children}
          <S.TagBox>{tag}</S.TagBox>
        </S.PostImgBox>
        <S.PostInfoBox>
          <S.PostTitleBox>
            <ReactIc width={20} height={20} />
            <p>{mainTitle}</p>
          </S.PostTitleBox>
          <S.PostSubTitleParagraph>{subTitle}</S.PostSubTitleParagraph>
          <S.PostDateParagraph>{date}</S.PostDateParagraph>
        </S.PostInfoBox>
      </S.PostArticle>
    </S.PostItem>
  );
};

export default PostPreview;
