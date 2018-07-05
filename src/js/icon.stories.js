import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import * as Icons from './icons';
import ThemeContext from './ThemeContext';

const customTheme = {
  color: '#2196f3',
};

storiesOf('Icon', module)
  .add('Default', () => {
    const Icon = Icons[text('Icon', 'Accessibility')];
    if (!Icon) {
      return null;
    }
    return <Icon size={text('Size', 'xlarge')} />;
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
