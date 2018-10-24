var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var PersonalComputer = function PersonalComputer(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'PersonalComputer' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,18 L21,18 L21,5 L21,5 C21,4.44771525 20.5522847,4 20,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,18 Z M2,20 L22,20 C23,20 23,19 23,19 L1,19 C1,19 1,20 2,20 Z' })
  );
};