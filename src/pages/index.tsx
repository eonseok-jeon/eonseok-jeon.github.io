import React, { useEffect, useState } from 'react';
import FeatureSection from '@components/FeatureSection';
import HeroSection from '@components/HeroSection';
import GlobalCSS from '@layouts/GlobalCSS';
import MainNav from '@layouts/MainNav';

const IndexPage = () => {
  const [isSticky, setIsSticky] = useState(false);

  const stickyNav = () => {
    const stickyStartPoint = window.innerHeight - 80;

    if (window !== undefined) {
      window.scrollY > stickyStartPoint ? setIsSticky(true) : setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyNav);

    return () => window.removeEventListener('scroll', stickyNav);
  }, []);

  return (
    <GlobalCSS>
      <main>
        <MainNav isSticky={isSticky} />
        <HeroSection isSticky={isSticky} />
        <FeatureSection />
      </main>
    </GlobalCSS>
  );
};

export const Head = () => <title>Eonseok&apos;s GitHub Pages</title>;

export default IndexPage;
