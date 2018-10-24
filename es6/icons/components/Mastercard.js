var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Mastercard = function Mastercard(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Mastercard' }, props),
    React.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      React.createElement('circle', { cx: '7', cy: '12', r: '7', fill: '#EA001B' }),
      React.createElement('circle', { cx: '17', cy: '12', r: '7', fill: '#FFA200', fillOpacity: '.8' })
    )
  );
};