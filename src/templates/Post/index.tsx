import React, { Children, PropsWithChildren } from 'react';
import GlobalCSS from '@layouts/GlobalCSS';
import MainNav from '@layouts/MainNav';
import * as S from './style';
import { MainTitle } from '../ReusableCSS';

interface IPostProps { 
  mainTitle: string;
  tag: string;
  date: string;
  subTitle: string;
}

/** Post 상세 페이지 template */
const Post = ({ mainTitle, tag, date, subTitle, children }: PropsWithChildren<IPostProps>) => {
  const childrenArray = Children.toArray(children);

  return (
    <GlobalCSS>
      <MainNav isSticky={true} />
      <S.PostArticle>
        <div>
          <S.PostMainTitleBox>
            <MainTitle>{mainTitle}</MainTitle>
            <p>@{tag} / {date}</p>
          </S.PostMainTitleBox>
          {childrenArray[0]}
          <S.PostSubTitle>{subTitle}</S.PostSubTitle>
        </div>
        {childrenArray[1]}
      </S.PostArticle>
    </GlobalCSS>
  );
};

export default Post;