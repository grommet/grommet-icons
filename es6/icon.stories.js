import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
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
storiesOf('Icon', module).add('Default', function () {
  var Icon = Icons[text('Icon', 'Accessibility')];

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Icon, null);
}).add('Color', function () {
  var Icon = Icons[text('Icon', 'Accessibility')];

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: customTheme
  }, /*#__PURE__*/React.createElement(Icon, {
    size: text('Size', 'xlarge'),
    color: text('Color', 'attention')
  }));
}).add('Plain', function () {
  return /*#__PURE__*/React.createElement(Icons.Pocket, {
    color: "plain"
  });
}).add('Custom Theme', function () {
  var Icon = Icons[text('Icon', 'Accessibility')];

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: customTheme
  }, /*#__PURE__*/React.createElement(Icon, {
    size: text('Size', 'xlarge')
  }));
}).add('Js', function () {
  var Icon = Icons[text('Icon', 'Js')];

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement(Icon, {
    color: "plain"
  }));
}).add('WifiNone', function () {
  var Icon = Icons[text('Icon', 'WifiNone')];

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement(Icon, {
    color: "plain"
  }));
}).add('WifiMedium', function () {
  var Icon = Icons[text('Icon', 'WifiMedium')];

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement(Icon, {
    color: "plain"
  }));
}).add('Coffee', function () {
  var Icon = Icons[text('Icon', 'Coffee')];

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement(Icon, {
    color: "plain"
  }));
}).add('Amazon', function () {
  var Icon = Icons[text('Icon', 'Amazon')];

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement(Icon, {
    color: "plain"
  }));
}).add('GooglePlay', function () {
  var Icon = Icons[text('Icon', 'GooglePlay')];

  if (!Icon) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement(Icon, {
    color: "plain"
  }));
});