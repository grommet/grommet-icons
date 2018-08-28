var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var StepsOption = function StepsOption(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StepsOption' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M24,9 L19,9 L19,14 L14,14 L14,19 L9,19 L9,24 M1,24 L1,16.9970301 C1,16.4463856 1.31329632,15.6867037 1.70336215,15.2966378 L15.2966378,1.70336215 C15.685094,1.31490596 16.4530363,1 16.9970301,1 L24,1' })
  );
};