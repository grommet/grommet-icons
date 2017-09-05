var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Login = function Login(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Login' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M9,15 L9,22 L22,22 L22,2 L9,2 L9,9 M18,12 L0,12 M13,7 L18,12 L13,17' })
      )
    )
  );
};

export default Login;