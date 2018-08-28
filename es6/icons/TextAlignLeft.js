var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var TextAlignLeft = function TextAlignLeft(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'TextAlignLeft' }, props),
    React.createElement('rect', { x: '0.46', y: '3.06', width: '23.08', height: '2.18' }),
    React.createElement('rect', { x: '0.46', y: '8.29', width: '15.81', height: '2.18' }),
    React.createElement('rect', { x: '0.46', y: '13.53', width: '23.08', height: '2.18' }),
    React.createElement('rect', { x: '0.46', y: '18.76', width: '15.81', height: '2.18' })
  );
};