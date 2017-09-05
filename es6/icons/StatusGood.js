var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusGood = function StatusGood(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusGood' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2' },
        React.createElement('circle', { stroke: '#000000', fill: '#000000', cx: '12', cy: '12', r: '10' }),
        React.createElement('polyline', { stroke: '#FFFFFF', points: '7 12 11 15 16 8' })
      )
    )
  );
};

export default StatusGood;