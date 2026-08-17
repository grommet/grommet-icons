// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
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
