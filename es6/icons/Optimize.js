var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Optimize = function Optimize(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Optimize' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M2,22 L6,22 L6,18 L2,18 L2,22 Z M22,2 L12,12 M22,10 L22,2 L14,2 M22,13 L18,13 L18,22 L22,22 L22,13 Z M10,22 L14,22 L14,16 L10,16 L10,22 Z' })
      )
    )
  );
};

export default Optimize;