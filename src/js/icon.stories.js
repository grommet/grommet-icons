import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

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
      medium: '24px',
      large: '48px',
      xlarge: '300px',
    },
  },
};

storiesOf('Icon', module)
.add('Default', () => {
  const Icon = Icons[text('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return <Icon />;
})
  .add('Color', () => {
    const Icon = Icons[text('Icon', 'Accessibility')];
    if (!Icon) {
      return null;
    }
    return (
      <ThemeProvider theme={customTheme}>
        <Icon size={text('Size', 'xlarge')} color={text('Color', 'attention')} />
      </ThemeProvider>
    );
  })
  .add('Plain', () => (
    <Icons.Pocket color='plain' />
    ))
  .add('Custom Theme', () => {
    const Icon = Icons[text('Icon', 'Accessibility')];
    if (!Icon) {
      return null;
    }
    return (
      <ThemeProvider theme={customTheme}>
        <Icon size={text('Size', 'xlarge')} />
      </ThemeProvider>
    );
  })
  .add('Js', () => {
    const Icon = Icons[text('Icon', 'Js')];
    if (!Icon) {
      return null;
    }
    return <><Icon /><Icon color='plain' /></>;
  })
  .add('WifiNone', () => {
    const Icon = Icons[text('Icon', 'WifiNone')];
    if (!Icon) {
      return null;
    }
    return <><Icon /><Icon color='plain' /></>;
  })
  .add('WifiMedium', () => {
    const Icon = Icons[text('Icon', 'WifiMedium')];
    if (!Icon) {
      return null;
    }
    return <><Icon /><Icon color='plain' /></>;
  })
  .add('Coffee', () => {
    const Icon = Icons[text('Icon', 'Coffee')];
    if (!Icon) {
      return null;
    }
    return <><Icon /><Icon color='plain' /></>;
  })
  .add('Amazon', () => {
    const Icon = Icons[text('Icon', 'Amazon')];
    if (!Icon) {
      return null;
    }
    return <><Icon /><Icon color='plain' /></>;
  })
  .add('GooglePlay', () => {
    const Icon = Icons[text('Icon', 'GooglePlay')];
    if (!Icon) {
      return null;
    }
    return <><Icon /><Icon color='plain' /></>;
  });
