import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import * as Icons from './icons';
import ThemeContext from './ThemeContext';

var customTheme = {
  color: '#2196f3'
};

storiesOf('Icon', module).add('Default', function () {
  var Icon = Icons[text('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return React.createElement(Icon, { size: text('Size', 'xlarge') });
}).add('Custom Theme', function () {
  var Icon = Icons[text('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return React.createElement(
    ThemeContext.Extend,
    { value: customTheme },
    React.createElement(Icon, { size: text('Size', 'xlarge') })
  );
});