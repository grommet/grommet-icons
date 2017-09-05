var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Mail = function Mail(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Mail' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,5 L12,14 L23,5 M1,20 L23,20 L23,4 L1,4 L1,20 L1,20 Z' })
      )
    )
  );
};

export default Mail;