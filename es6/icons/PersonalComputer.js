var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var PersonalComputer = function PersonalComputer(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'PersonalComputer' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M3,18 L21,18 L21,4 L3,4 L3,18 Z M1,21 L23,21 L23,18 L1,18 L1,21 Z M6,15 L18,15 L18,7 L6,7 L6,15 Z' })
      )
    )
  );
};

export default PersonalComputer;