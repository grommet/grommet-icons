import React from 'react';
import { boolean as _boolean, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import * as Icons from './icons';
var customTheme = {
  global: {
    colors: {
      icon: '#2196f3',
      attention: '#ff3333'
    }
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '300px'
    }
  }
};
export default {
  title: 'Icon'
};
export var Default = function Default() {
  var Icon = Icons[text('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Icon, null);
};
export var Color = function Color() {
  var Icon = Icons[text('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  var theme = JSON.parse(JSON.stringify(customTheme));
  theme.icon.disableScaleDown = _boolean('disableScaleDown', false);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Icon, {
    size: text('Size', 'xlarge'),
    color: text('Color', 'attention')
  }));
};
export var Plain = function Plain() {
  return /*#__PURE__*/React.createElement(Icons.Pocket, {
    color: "plain"
  });
};
export var CustomTheme = function CustomTheme() {
  var Icon = Icons[text('Icon', 'Accessibility')];
  if (!Icon) {
    return null;
  }
  var theme = JSON.parse(JSON.stringify(customTheme));
  theme.icon.disableScaleDown = _boolean('disableScaleDown', false);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Icon, {
    size: text('Size', 'xlarge')
  }));
};