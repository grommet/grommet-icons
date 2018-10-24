var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Cubes = function Cubes(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Cubes' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M6.5,10.5 L12,13.5 L17.5,10.5 L17.5,4.5 L12,1.5 L6.5,4.5 L6.5,10.5 Z M6.5,4.5 L12,7.5 L17.5,4.5 M12,7.5 L12,13.5 L12,7.5 Z M1,19.5 L6.5,22.5 L12,19.5 L12,13.5 L6.5,10.5 L1,13.5 L1,19.5 Z M1,13.5 L6.5,16.5 L12,13.5 M6.5,16.5 L6.5,22.5 L6.5,16.5 Z M12,19.5 L17.5,22.5 L23,19.5 L23,13.5 L17.5,10.5 L12,13.5 L12,19.5 Z M12,13.5 L17.5,16.5 L23,13.5 M17.5,16.5 L17.5,22.5 L17.5,16.5 Z' })
  );
};