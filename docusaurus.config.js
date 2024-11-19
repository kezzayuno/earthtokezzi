module.exports = {
  title: 'earthtokezzi',
  tagline: 'Test tagline',
  url: 'https://kezzayuno.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kezzayuno',
  projectName: 'earthtokezzi',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'earthtokezzi',
      logo: {
        alt: 'earthtokezzi logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/music', label: 'all things music', position: 'left' },
        { to: '/cooking', label: 'all things cooking', position: 'left' },
        { to: '/tech-writing', label: 'all things tech writing', position: 'left' },
        { to: '/league', label: 'all things league of legends', position: 'left' },
        { to: '/style', label: 'earthtokezzi style guide', position: 'left' },
        { to: '/about', label: 'all things about me', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} earthtokezzi.`,
    },
  },
};
