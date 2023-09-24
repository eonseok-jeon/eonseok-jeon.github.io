import * as React from 'react';
import GlobalCSS from '@layouts/GlobalCSS';
import MainNav from '@layouts/MainNav';

const IndexPage = () => {
  return (
    <GlobalCSS>
      <MainNav />
      <main>
        <h1>Eonseok&apos;s GitHub Pages</h1>
      </main>
    </GlobalCSS>
  );
};

export const Head = () => <title>Eonseok&apos;s GitHub Pages</title>;

export default IndexPage;
