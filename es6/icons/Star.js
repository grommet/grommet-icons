var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Star = function Star(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Star' }, props),
    React.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '5 21 8 14 3 9 9 9 12 3 15 9 21 9 16 14 19 21 12 17' })
  );
};

export default Star;