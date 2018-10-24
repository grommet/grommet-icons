var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Multiple = function Multiple(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Multiple' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M19,15 L23,15 L23,1 L9,1 L9,5 M15,19 L19,19 L19,5 L5,5 L5,9 M1,23 L15,23 L15,9 L1,9 L1,23 L1,23 L1,23 Z' })
  );
};