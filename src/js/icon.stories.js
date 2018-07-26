import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import * as Icons from './icons';
import ThemeContext from './ThemeContext';

const customTheme = {
  color: '#2196f3',
  colors: {
    attention: '#ff3333',
  },
};

storiesOf('Icon', module)
  .add('Default', () => {
    const Icon = Icons[text('Icon', 'Accessibility')];
    if (!Icon) {
      return null;
    }
    return <Icon size={text('Size', 'xlarge')} />;
  })
  .add('Color', () => {
    const Icon = Icons[text('Icon', 'Accessibility')];
    if (!Icon) {
      return null;
    }
    return (
      <ThemeContext.Extend value={customTheme}>
        <Icon size={text('Size', 'xlarge')} color={text('Color', 'attention')} />
      </ThemeContext.Extend>
    );
  })
  .add('Custom Theme', () => {
    const Icon = Icons[text('Icon', 'Accessibility')];
    if (!Icon) {
      return null;
    }
    return (
      <ThemeContext.Extend value={customTheme}>
        <Icon size={text('Size', 'xlarge')} />
      </ThemeContext.Extend>
    );
  });
