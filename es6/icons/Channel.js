var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Channel = function Channel(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Channel' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M2,9 L22,9 L22,22 L2,22 L2,9 Z M21,2 L13,9 L11,9 L3,2' })
      )
    )
  );
};

export default Channel;