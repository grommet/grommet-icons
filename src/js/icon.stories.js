import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import * as Icons from './icons';

const customTheme = {
  global: {
    colors: {
      icon: '#2196f3',
      attention: '#ff3333',
    },
  },
  icon: {
    size: {
      small: '12px',
      medium: '18px',
      large: '48px',
      xlarge: '300px',
    },
  },
  text: {
    medium: {
      size: '1.125rem',
      height: '1.5rem',
    },
  },
};

export default {
  title: 'Icon',
};

export const Default = () => {
  const Icon = Icons[text('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return <Icon />;
};

export const Color = () => {
  const Icon = Icons[text('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  const theme = JSON.parse(JSON.stringify(customTheme));
  theme.icon.disableScaleDown = boolean('disableScaleDown', false);
  return (
    <ThemeProvider theme={theme}>
      <Icon
        size={text('Size', 'medium')}
        color={text('Color', 'attention')}
        height="medium"
        width="medium"
      />
    </ThemeProvider>
  );
};

export const Plain = () => <Icons.Pocket color="plain" />;

export const CustomTheme = () => {
  const Icon = Icons[text('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  const theme = JSON.parse(JSON.stringify(customTheme));
  theme.icon.disableScaleDown = boolean('disableScaleDown', false);
  return (
    <ThemeProvider theme={theme}>
      <Icon size={text('Size', 'xlarge')} />
    </ThemeProvider>
  );
};
