var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Archive = function Archive(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Archive' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,23 L21,23 L21,6 L3,6 L3,23 Z M9,14 L15,14 L15,10 L9,10 L9,14 Z M1,6 L23,6 L23,1 L1,1 L1,6 Z' })
  );
};