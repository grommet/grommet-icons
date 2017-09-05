var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StarHalf = function StarHalf(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StarHalf' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M5,21 L8,14 L3,9 L9,9 L12,3 L15,9 L21,9 L16,14 L19,21 L12,17 L5,21 Z M11,8 L11,16 L8,17.5 L9.5,14 L5.5,10 L10,10 L11,8 Z M8,11 L10,13 L10,11 L8,11 Z' })
      )
    )
  );
};

export default StarHalf;