import * as React from 'react';
import HeroSection from '@components/HeroSection';
import GlobalCSS from '@layouts/GlobalCSS';
import MainNav from '@layouts/MainNav';

const IndexPage = () => {
  return (
    <GlobalCSS>
      <main>
        <MainNav />
        <HeroSection />
      </main>
    </GlobalCSS>
  );
};

export const Head = () => <title>Eonseok&apos;s GitHub Pages</title>;

export default IndexPage;
