var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var DocumentMissing = function DocumentMissing(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'DocumentMissing' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M9,12 L15,18 M15,12 L9,18' })
  );
};