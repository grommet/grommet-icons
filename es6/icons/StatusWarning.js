var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusWarning = function StatusWarning(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusWarning' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' },
      React.createElement(
        'g',
        { strokeWidth: '2' },
        React.createElement('polygon', { stroke: '#000000', fill: '#000000', points: '12 3 22 21 2 21' }),
        React.createElement('path', { d: 'M12,9 L12,15 M12,16 L12,18', stroke: '#FFFFFF' })
      )
    )
  );
};

export default StatusWarning;