var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusGoodSmall = function StatusGoodSmall(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusGoodSmall' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', fill: '#000000' },
        React.createElement('circle', { cx: '6', cy: '6', r: '5' })
      )
    )
  );
};

export default StatusGoodSmall;