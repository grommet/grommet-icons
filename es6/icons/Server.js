var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Server = function Server(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Server' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M14,19 L15,19 L15,18 L14,18 L14,19 Z M5,23 L19,23 L19,1 L5,1 L5,23 Z M8,5 L16,5 L8,5 Z M8,9 L16,9 L8,9 Z M8,13 L16,13 L8,13 Z' })
      )
    )
  );
};

export default Server;