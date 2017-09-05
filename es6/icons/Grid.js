var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Grid = function Grid(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Grid' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M8,1 L8,23 M16,1 L16,23 M1,8 L23,8 M1,16 L23,16 M1,1 L23,1 L23,23 L1,23 L1,1 Z' })
      )
    )
  );
};

export default Grid;