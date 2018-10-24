var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Integration = function Integration(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Integration' }, props),
    React.createElement('path', { fill: 'none', stroke: '#231F20', strokeWidth: '2', d: 'M5,21 L23,21 L23,9 L5,9 M19,15 L1,15 L1,3 L19,3' })
  );
};