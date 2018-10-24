var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Multimedia = function Multimedia(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Multimedia' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M2,8 L2,22 L22,22 L22,9 M11,4 L7,8 M2,4 L2,8 L17,8 L21,4 L2,4 Z M16,4 L12,8' })
  );
};