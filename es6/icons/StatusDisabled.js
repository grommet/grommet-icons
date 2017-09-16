var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusDisabled = function StatusDisabled(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'StatusDisabled' }, props),
    React.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd', strokeWidth: '2' },
      React.createElement('rect', { width: '20', height: '20', x: '2', y: '2', fill: '#000', stroke: '#000', rx: '2' }),
      React.createElement('path', { stroke: '#FFF', d: 'M18,12 L6,12', transform: 'matrix(-1 0 0 1 24 0)' })
    )
  );
};

export default StatusDisabled;