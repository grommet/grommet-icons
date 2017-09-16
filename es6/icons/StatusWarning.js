var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusWarning = function StatusWarning(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StatusWarning' }, props),
    React.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round', strokeWidth: '2' },
      React.createElement('polygon', { fill: '#000', stroke: '#000', points: '12 3 22 21 2 21' }),
      React.createElement('path', { stroke: '#FFF', d: 'M12,9 L12,15 M12,16 L12,18' })
    )
  );
};

export default StatusWarning;