module.exports = {
  title: 'earthtokezzi',
  tagline: 'Test tagline',
  url: 'https://kezzayuno.github.io',
  baseUrl: '/earthtokezzi/',
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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/kezzayuno/earthtokezzi/edit/main/',
        },
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
        {
          type: 'doc',
          docId: 'test',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/kezzayuno/earthtokezzi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} earthtokezzi.`,
    },
  },
};
