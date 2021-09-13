const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        '@/data': path.resolve(__dirname, '../data/'),
      },
    },
  }),
};
