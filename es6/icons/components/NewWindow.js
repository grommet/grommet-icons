var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var NewWindow = function NewWindow(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'NewWindow' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M11,9 L19,9 M15,13 L15,5 M17,17 L17,23 L1,23 L1,7 L1,7 L7,7 M7,1 L23,1 L23,17 L7,17 L7,1 Z' })
  );
};