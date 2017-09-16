var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var HpeElement = function HpeElement(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 40 12', a11yTitle: 'HpeElement' }, props),
    React.createElement('polygon', { fill: 'none', stroke: '#01A982', strokeWidth: '3', points: '1.5 1.5 38.5 1.5 38.5 10.5 1.5 10.5' })
  );
};

export default HpeElement;