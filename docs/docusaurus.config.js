/* eslint-disable jsdoc/require-file-overview */
// Note: Type annotations allow type checking and IDEs autocompletion.

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const title = 'Life.Church Web Services Component Library';

const config = {
  baseUrl: '/lc-component-library-io/',
  deploymentBranch: 'gh-pages', // The name of the GitHub deployment branch.
  favicon: 'https://www.life.church/favicon-32x32.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'hessler', // Usually your GitHub org/user name.
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  projectName: 'lc-component-library-io', // Usually your repo name.
  tagline: 'Centralizing components for a more perfect development experience.',
  themeConfig: {
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Life.Church.<br><small><i>Built with <a href="https://docusaurus.io/" title="Docusaurus.io" rel="noreferrer noopener">Docusaurus</a></i></small>`,
      style: 'dark',
    },
    navbar: {
      items: [
        {
          href: 'https://github.com/hessler/lc-component-library-io',
          label: 'GitHub',
          position: 'right',
        },
      ],
      logo: {
        alt: 'Life.Church',
        src: 'https://www.life.church/favicon-32x32.png',
      },
      title,
    },
    prism: {
      darkTheme: darkCodeTheme,
      theme: lightCodeTheme,
    },
    sidebar: {
      hideable: true,
    },
  },
  title,
  trailingSlash: false, // GitHub pages adds a trailing slash, and is recommended that this be false.
  url: 'https://life.church',
};

module.exports = config;
