var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var TreeOption = function TreeOption(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'TreeOption' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M7,13 L11.375,6 L9,6 L12,2 L15,6 L12.625,6 L17,13 L15,13 L19,19.6666667 L5,19.6666667 L9,13 L7,13 Z M12,24 L12,20' })
      )
    )
  );
};

export default TreeOption;