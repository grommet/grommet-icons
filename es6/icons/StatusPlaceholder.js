var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusPlaceholder = function StatusPlaceholder(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusPlaceholder' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2', fill: '#000000' },
        React.createElement('rect', { x: '2', y: '2', width: '20', height: '20', rx: '2' })
      )
    )
  );
};

export default StatusPlaceholder;