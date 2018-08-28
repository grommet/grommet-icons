var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var StatusPlaceholderSmall = function StatusPlaceholderSmall(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 12 12', a11yTitle: 'StatusPlaceholderSmall' }, props),
    React.createElement('rect', { width: '10', height: '10', x: '1', y: '1', fillRule: 'evenodd', stroke: '#000', rx: '1' })
  );
};