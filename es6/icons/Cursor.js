var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Cursor = function Cursor(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Cursor' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polygon', { points: '6 3 18 14 13 15 16 20.5 13 22 10 16 6 19' })
      )
    )
  );
};

export default Cursor;