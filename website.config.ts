import type { TWebsiteConfig } from '@blackbyte/website-common';
import packageJson from './package.json' assert { type: 'json' };

export default {
  posthog: {
    projectApiKey: 'phc_t5yvxkWJDtICl40OBt4QfJmYgsT8CHfC44uNSOmyar3',
  },
  title: 'SugarCSS',
  description:
    'Add a sugar in your css with features like advanced color handling, media queries management, and a lot more...',
  install: 'npm i @blackbyte/sugarcss',
  getStarted: {
    url: '/#get-started',
  },
  welcome: {
    title: 'SugarCSS',
    description:
      'The CSS toolkit that you missed...<br />...like <span class="color-accent">a sugar in your coffee!</span>',
    withLove: `Made with <span class="color-accent">♥</span> by Blackbyte<br />on top of <a class="color-accent" href="https://lightningcss.dev" title="Lightningcss" target="_blank">Lightningcss</a>`,
  },
  version: packageJson.version,
  license: {
    name: 'MIT',
    url: 'https://github.com/Blackbytespace/sugarcss/blob/main/LICENSE.md',
  },
  repository: {
    name: 'Blackbyte SugarCSS',
    url: 'https://github.com/Blackbytespace/sugarcss',
  },
  og: {
    imageUrl:
      'https://raw.githubusercontent.com/Blackbytespace/sugarcss/refs/heads/main/assets/blackbyte-sugarcss-og.png',
  },
  discord: {
    url: 'https://discord.gg/ZJvmd6cM',
  },
  menu: [
    {
      type: 'group',
      label: 'Documentation',
      items: [
        {
          id: 'get-started',
          label: 'Get started',
          description: 'Quick start using @blackbyte/sugarcss',
          value: 'get-started',
          slug: '/#get-started',
          preventSet: true,
        },
        {
          id: 'issues',
          label: 'Declare an issue',
          description: 'Report a bug or request a feature',
          value: 'issue',
          url: 'https://github.com/Blackbytespace/sugarcss/issues',
          preventSet: true,
        },
        {
          id: 'repository',
          label: 'GitHub repository',
          description: 'Browse the source code on GitHub',
          value: 'repository',
          url: 'https://github.com/Blackbytespace/sugarcss',
          preventSet: true,
        },
        {
          id: 'license',
          label: 'License',
          description: 'View the license information',
          value: 'license',
          url: 'https://github.com/Blackbytespace/sugarcss/blob/main/LICENSE.md',
          preventSet: true,
        },
      ],
    },
  ],
} as TWebsiteConfig;
