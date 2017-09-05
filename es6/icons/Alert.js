var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Alert = function Alert(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Alert' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M12,17 L12,19 M12,10 L12,16 M12,3 L2,22 L22,22 L12,3 Z' })
      )
    )
  );
};

export default Alert;