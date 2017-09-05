var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Briefcase = function Briefcase(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Briefcase' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,6 L23,6 L23,21 L1,21 L1,6 Z M6,6 L6,21 M18,6 L18,21 M8,6 L8,3 L16,3 L16,6' })
      )
    )
  );
};

export default Briefcase;