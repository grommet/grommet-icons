var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var ThreeD = function ThreeD(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'ThreeD' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,5.5 L2,18.5 L12,22.5 L22,18.5 L22,5.5 L12,1.5 L2,5.5 Z M13,12 L18,12 L18,17 M2,5.5 L12,9.5 L22,5.5 M6,14 C6,14 12,20.5 18,12' })
  );
};