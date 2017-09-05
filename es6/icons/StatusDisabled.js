var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusDisabled = function StatusDisabled(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusDisabled' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2' },
        React.createElement('rect', { stroke: '#000000', fill: '#000000', x: '2', y: '2', width: '20', height: '20', rx: '2' }),
        React.createElement('path', { d: 'M18,12 L6,12', stroke: '#FFFFFF', transform: 'translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ' })
      )
    )
  );
};

export default StatusDisabled;