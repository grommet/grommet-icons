var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Basket = function Basket(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Basket' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,12 L22,12 L20,23 L4,23 L2,12 Z M20,8 L14,1 M4,8 L10,1 M1,8 L23,8 L23,12 L1,12 L1,8 Z M8,15 L8,20 M16,15 L16,20 M12,15 L12,20' })
  );
};