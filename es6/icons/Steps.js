var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Steps = function Steps(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Steps' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { strokeWidth: '2', stroke: '#000000' },
        React.createElement('polygon', { points: '16 6 11 6 11 11 6 11 6 16 1 16 1 23 23 23 23 1 16 1' })
      )
    )
  );
};

export default Steps;