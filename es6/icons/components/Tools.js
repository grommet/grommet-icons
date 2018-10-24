var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Tools = function Tools(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Tools' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M11,2 L22,13 L17.5,17.5 L6.5,6.5 L11,2 Z M16,6 L17,5 L19,7 L18,8 M13,13 L4,22 L2,20 L11,11 M5,18 L6,19' })
  );
};