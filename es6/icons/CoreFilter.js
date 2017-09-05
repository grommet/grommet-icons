var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var CoreFilter = function CoreFilter(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'CoreFilter' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polygon', { points: '3 6 10 13 10 21 14 21 14 13 21 6 21 3 3 3' })
      )
    )
  );
};

export default CoreFilter;