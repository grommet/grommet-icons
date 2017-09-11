var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Chat = function Chat(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Chat' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,1 L23,1 L23,17 L7,17 L1,22 L1,1 Z M5,7 L18,7 M5,11 L14,11' })
  );
};

export default Chat;