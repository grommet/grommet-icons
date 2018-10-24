var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Radial = function Radial(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Radial' }, props),
    React.createElement('circle', { cx: '12', cy: '12', r: '11', fill: 'none', stroke: '#000', strokeWidth: '2' })
  );
};