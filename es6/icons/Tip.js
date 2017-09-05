var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Tip = function Tip(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Tip' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M16.0073529,18 L22,18 L22,2 L2,2 L2,18 L8.24264706,18 L12.125,22 L16.0073529,18 Z' })
      )
    )
  );
};

export default Tip;