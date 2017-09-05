var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Directions = function Directions(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Directions' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M17,11 L22,6 L17,1 M22,6 L18,6 C14.686,6 12,8.686 12,12 L12,24 M7,6 L2,11 L7,16 M2,11 L6,11 C9.314,11 12,13.686 12,17 L12,24' })
      )
    )
  );
};

export default Directions;