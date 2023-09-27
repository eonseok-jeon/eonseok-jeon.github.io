import React from 'react';
import PostPreview from '@templates/PostPreview';
import { MainTitle, SubTitle } from '@templates/ReusableCSS';
import * as S from './style';

/** Main Page Feature Section */
const FeatureSection = () => {
  return (
    <S.FeatureContainer id="post-preview-list">
      <MainTitle>My Posts</MainTitle>
      <SubTitle>Total (49)</SubTitle>
      <S.PostList>
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
      </S.PostList>
    </S.FeatureContainer>
  );
};

export default FeatureSection;