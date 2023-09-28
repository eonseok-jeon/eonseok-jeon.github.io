import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby for Eonseok\'s GitHub Pages',
    siteUrl: 'https://eonseok-jeon.github.io'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@hooks': 'src/hooks',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages',
          '@templates': 'src/templates',
          '@posts': 'content/posts'
        },
        extensions: [
          'js', 
          'ts',
          'jsx',
          'tsx'
        ]
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp'
  ]
};

export default config;
