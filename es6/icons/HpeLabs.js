var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var HpeLabs = function HpeLabs(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'HpeLabs' }, props),
    React.createElement('polyline', { fill: 'none', stroke: '#01A982', strokeWidth: '2', points: '14 23 5 23 5 2 17 2 17 15 13 15 13 6 9 6 9 19 20 19' })
  );
};