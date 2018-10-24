var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Capacity = function Capacity(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Capacity' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeWidth: '2', d: 'M1,19 L23,19 L23,5 L1,5 L1,19 Z M4,16 L7,16 L7,8 L4,8 L4,16 Z M10,16 L13,16 L13,8 L10,8 L10,16 Z' })
  );
};