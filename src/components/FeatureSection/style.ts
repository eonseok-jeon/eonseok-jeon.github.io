import styled from 'styled-components';
import { Container } from '@templates/ReusableCSS';

const FeatureContainer = styled(Container)`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  justify-content: center;
  padding-top: 12rem;
`;

const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26.6rem, 1fr));
  column-gap: 2rem;
  margin-top: 3.2rem;
`;

export {
  FeatureContainer,
  PostList
};
