import React from 'react';
import FeatureSection from '@components/FeatureSection';
import HeroSection from '@components/HeroSection';
import GlobalCSS from '@layouts/GlobalCSS';
import MainNav from '@layouts/MainNav';
import useStickyNav from '@hooks/useStickyNav';
import Post from '@templates/Post';

const IndexPage = () => {
  const { isSticky } = useStickyNav();

  return (
    <GlobalCSS>
      <main>
        <MainNav isSticky={isSticky} />
        <HeroSection isSticky={isSticky} />
        <FeatureSection />
        <Post />
      </main>
    </GlobalCSS>
  );
};

export const Head = () => <title>Eonseok&apos;s GitHub Pages</title>;

export default IndexPage;
