var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Navigate = function Navigate(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Navigate' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M20,11 L22,8 L20,5 L12,5 L12,11 L20,11 Z M12,24 L12,0 M4,2 L2,5 L4,8 L12,8 L12,2 L4,2 Z' })
      )
    )
  );
};

export default Navigate;