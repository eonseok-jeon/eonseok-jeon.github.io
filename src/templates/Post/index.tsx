import React, { PropsWithChildren } from 'react';
import { MainTitle } from '../ReusableCSS';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './style';

interface IPostProps { 
  mainTitle: string;
  tag: string;
  date: string;
  url: string;
  subTitle: string;
}

/** Post 상세 페이지 template */
const Post = ({ mainTitle, tag, date, url, subTitle, children }: PropsWithChildren<IPostProps>) => {
  return (
    <S.PostArticle>
      <div>
        <S.PostMainTitleBox>
          <MainTitle>{mainTitle}</MainTitle>
          <p>@{tag} / {date}</p>
        </S.PostMainTitleBox>
        <StaticImage src={url} alt="post-img" 
          style={{ width: '100%', height: '60vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
        <S.PostSubTitle>{subTitle}</S.PostSubTitle>
      </div>
      <S.PostContentBox>
        {children}
      </S.PostContentBox>
    </S.PostArticle>
  );
};

export default Post;