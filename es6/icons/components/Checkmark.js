var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Checkmark = function Checkmark(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Checkmark' }, props),
    React.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '2 14 9 20 22 4' })
  );
};