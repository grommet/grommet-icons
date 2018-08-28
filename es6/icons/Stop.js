var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Stop = function Stop(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Stop' }, props),
    React.createElement('rect', { width: '16', height: '16', x: '4', y: '4', fill: 'none', stroke: '#000', strokeWidth: '2' })
  );
};