import React from 'react';
import * as R from '@templates/ReusableCSS';
import * as S from './style';
import PostList from './PostList';

/** Main Page Feature Section */
const FeatureSection = () => {
  return (
    <S.FeatureContainer id="post-preview-list">
      <R.MainTitle>My Posts</R.MainTitle>
      <R.SubTitle>Total (12)</R.SubTitle>
      <PostList />
    </S.FeatureContainer>
  );
};

export default FeatureSection;
