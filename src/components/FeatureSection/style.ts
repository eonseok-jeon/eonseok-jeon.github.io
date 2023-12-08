import styled from 'styled-components';
import * as R from '@templates/ReusableCSS';

const FeatureContainer = styled(R.Container)`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  justify-content: center;
  padding-top: 12rem;
`;

const PostDataList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27.6rem, 1fr));
  column-gap: 2rem;
  margin-top: 3.2rem;
`;

export { FeatureContainer, PostDataList };
