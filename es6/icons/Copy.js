var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Copy = function Copy(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Copy' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M9,15 L17,15 L9,15 Z M9,11 L19,11 L9,11 Z M9,7 L13,7 L9,7 Z M16,1 L16,7 L22,7 M6,5 L2,5 L2,23 L18,23 L18,19 M22,19 L6,19 L6,1 L17,1 L22,6 L22,19 L22,19 Z' })
  );
};