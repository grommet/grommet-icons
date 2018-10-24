var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Compliance = function Compliance(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Compliance' }, props),
    React.createElement('path', { fill: 'none', stroke: '#231F20', strokeWidth: '2', d: 'M8,6 L16,6 L16,1 L8,1 L8,6 L8,6 L8,6 Z M16,3 L21,3 L21,23 L3,23 L3,3 L8,3 M8,14 L11,17 L17,11' })
  );
};