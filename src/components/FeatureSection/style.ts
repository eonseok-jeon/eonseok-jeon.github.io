import styled from 'styled-components';
import { Container } from '@templates/ReusableCSS';

const FeatureContainer = styled(Container)`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  justify-content: center;
`;

const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26.6rem, 1fr));
  column-gap: 2rem;
`;

export {
  FeatureContainer,
  PostList
};