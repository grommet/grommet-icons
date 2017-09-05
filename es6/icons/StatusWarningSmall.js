var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusWarningSmall = function StatusWarningSmall(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusWarningSmall' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' },
      React.createElement(
        'g',
        { stroke: '#000000', fill: '#000000' },
        React.createElement('polygon', { points: '6 1 11 10 1 10' })
      )
    )
  );
};

export default StatusWarningSmall;