var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Attraction = function Attraction(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Attraction' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M13,2 L14.5,2.5 L13,3 L13,2 Z M14,18 L15,23 L13,23 L14,18 Z M14,16.5 L16,23 L12,23 L14,16.5 Z M12,6 L21,11 L21,13 L3,13 L3,11 L12,6 Z M4.5,13 L19.5,13 C19.5,17.1666667 21,23 21,23 L3,23 C3,23 4.5,17.1666667 4.5,13 Z M4.5,13 L19.5,13 C19.5,17.1666667 21,23 21,23 L3,23 C3,23 4.5,17.1666667 4.5,13 Z' })
  );
};