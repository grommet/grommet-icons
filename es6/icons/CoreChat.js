var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var CoreChat = function CoreChat(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'CoreChat' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,1 L23,1 L23,17 L7,17 L1,22 L1,1 Z M5,7 L18,7 M5,11 L14,11' })
      )
    )
  );
};

export default CoreChat;