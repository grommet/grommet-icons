var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Hpe = function Hpe(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Hpe' }, props),
    React.createElement('rect', { width: '22', height: '6', x: '1', y: '9', fill: 'none', stroke: '#01A982', strokeWidth: '3' })
  );
};