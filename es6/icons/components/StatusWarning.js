var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var StatusWarning = function StatusWarning(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StatusWarning' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeLinejoin: 'round', strokeWidth: '2', d: 'M12,3 L22,21 L2,21 L12,3 Z M12,9 L12,15 M12,16 L12,18' })
  );
};