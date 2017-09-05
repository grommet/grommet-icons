var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusPlaceholderSmall = function StatusPlaceholderSmall(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusPlaceholderSmall' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', fill: '#000000' },
        React.createElement('rect', { x: '1', y: '1', width: '10', height: '10', rx: '1' })
      )
    )
  );
};

export default StatusPlaceholderSmall;