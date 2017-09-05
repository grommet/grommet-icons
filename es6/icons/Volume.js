var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Volume = function Volume(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Volume' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M15,16 C17.209,16 19,14.209 19,12 C19,9.791 17.209,8 15,8 M15,20 C20,20 23,16.411 23,12 C23,7.589 19.411,4 15,4 M1,12 L1,8 L6,8 L12,3 L12,21 L6,16 L1,16 L1,12' })
      )
    )
  );
};

export default Volume;