var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Grommet = function Grommet(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Grommet' }, props),
    React.createElement('path', { fill: 'none', stroke: '#865CD6', strokeWidth: '5', d: 'M24,42 C33.9411255,42 42,33.9411255 42,24 C42,14.0588745 33.9411255,6 24,6 C14.0588745,6 6,14.0588745 6,24 C6,33.9411255 14.0588745,42 24,42 Z' })
  );
};

export default Grommet;