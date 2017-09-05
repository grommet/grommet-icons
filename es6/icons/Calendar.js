var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Calendar = function Calendar(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Calendar' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M2,5 L22,5 L22,22 L2,22 L2,5 Z M18,5 L18,1 M6,5 L6,1 M2,10 L22,10' })
      )
    )
  );
};

export default Calendar;