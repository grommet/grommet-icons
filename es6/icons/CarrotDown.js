var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var CarrotDown = function CarrotDown(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'CarrotDown' }, props),
    React.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '22 8 12 20 2 8' })
  );
};

export default CarrotDown;