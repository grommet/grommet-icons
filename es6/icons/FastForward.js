var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var FastForward = function FastForward(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'FastForward' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polygon', { points: '9 2.0586 9 8.00000005 1 2.0586 1 22.0586 9 15.9999996 9 22.0586 22 12.0586' })
      )
    )
  );
};

export default FastForward;