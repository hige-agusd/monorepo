import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../libs/hige-ds/lib/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.css\.ts$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@vanilla-extract/babel-plugin'],
          },
        },
      ],
      exclude: /node_modules/,
    });

    return config;
  },
};

export default config;