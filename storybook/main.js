module.exports = {
  addons: ['@storybook/addon-knobs'],
  stories: ['../src/js/icon.stories.js'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      strictMode: true,
    },
  },
};
