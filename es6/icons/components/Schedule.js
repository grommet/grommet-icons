var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Schedule = function Schedule(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Schedule' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,23 L23,23 L23,4 L1,4 L1,23 Z M4,18 L6,18 L4,18 Z M8,18 L20,18 L8,18 Z M4,14 L6,14 L4,14 Z M8,14 L20,14 L8,14 Z M18,4 L18,0 L18,4 Z M6,4 L6,0 L6,4 Z M1,9 L23,9 L1,9 Z' })
  );
};